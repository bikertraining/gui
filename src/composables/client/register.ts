import { processor, usePageLoading } from "@/composables";
import { computed, ComputedRef, reactive } from "vue";

interface UseClientRegisterInterface {
    createStudent: (values: Record<string, unknown>) => Promise<void>;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        address: string;
        city: string;
        class_type: string;
        comment: string;
        credit_card_cvv2: string;
        credit_card_first_name: string;
        credit_card_last_name: string;
        credit_card_month: string;
        credit_card_number: string;
        credit_card_year: string;
        dln: string;
        dls: string;
        dob: string;
        email: string;
        first_name: string;
        last_name: string;
        phone: string;
        schedule: string;
        state: string;
        xpl: string;
        zipcode: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    getDefaults: (routeParams: any) => void;
    getPrice: (id: number | string | string[]) => void;
    getSchedule: () => Promise<void>;
    nonFieldFormError: ComputedRef<boolean>;
    nonFieldFormMessage: ComputedRef<string>;
    priceObj: ComputedRef<{
        amount: string;
        class_type: string;
    }>;
}

export const useClientRegister = (): UseClientRegisterInterface => {
    const { loadingState } = usePageLoading();

    const createStudent = async (values: Record<string, unknown>) => {
        loadingState.isActive = true;

        const response = await processor.post(
            `client/register/index`,
            values
        );

        if (response.error) {
            if ('non_field_errors' in response.errors) {
                localRegister.nonFieldFormError = true;
                localRegister.nonFieldFormMessage = response.errors['non_field_errors'];
            } else {
                localRegister.formErrors = response.errors;
            }
        } else {
            localRegister.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    const formArr = computed(() => {
        return localRegister.formArr;
    });

    const formErrors = computed(() => {
        return localRegister.formErrors;
    });

    const formObj = computed(() => {
        return localRegister.formObj;
    });

    const formSuccess = computed(() => {
        return localRegister.formSuccess;
    });

    const getDefaults = async (routeParams: any) => {
        // eslint-disable-next-line
        if (Object.entries(routeParams).filter(([k, v], i) => !!v).length !== 0) {
            localRegister.formObj.schedule = routeParams['id'].toString();

            await getPrice(routeParams['id'].toString());
        }

        localRegister.formObj.xpl = 'none';
    }

    const getPrice = async (id: number | string | string[]) => {
        localRegister.priceObj = await processor.get(
            `client/register/price/${id}`
        );

        localRegister.formObj.class_type = localRegister.priceObj.class_type;
    };

    const getSchedule = async () => {
        loadingState.isActive = true;

        localRegister.formArr = await processor.get(
            'client/schedule/search'
        );

        loadingState.isActive = false;
    };

    const priceObj = computed(() => {
        return localRegister.priceObj;
    });

    const localRegister = reactive({
        formArr: [],
        formErrors: {},
        formObj: {
            address: '',
            city: '',
            class_type: '',
            comment: '',
            credit_card_cvv2: '',
            credit_card_first_name: '',
            credit_card_last_name: '',
            credit_card_month: '',
            credit_card_number: '',
            credit_card_year: '',
            dln: '',
            dls: '',
            dob: '',
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
            schedule: '',
            state: '',
            xpl: '',
            zipcode: ''
        },
        formSuccess: false,
        nonFieldFormError: false,
        nonFieldFormMessage: '',
        priceObj: {
            amount: '0.00',
            class_type: ''
        }
    });

    const nonFieldFormError = computed(() => {
        return localRegister.nonFieldFormError;
    });

    const nonFieldFormMessage = computed(() => {
        return localRegister.nonFieldFormMessage;
    });

    return {
        createStudent,
        formArr,
        formErrors,
        formObj,
        formSuccess,
        getDefaults,
        getPrice,
        getSchedule,
        nonFieldFormError,
        nonFieldFormMessage,
        priceObj
    };
};