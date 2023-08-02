import { ComputedRef, UnwrapNestedRefs } from "vue";

interface UseClientRegisterInterface {
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        address: string;
        amount: string;
        can_email: boolean;
        city: string;
        class_type: string;
        comment: string;
        coupon_code: string;
        coupon_is_active: boolean;
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
    submitRegistration: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    utilClassDate: (date_from: string, date_to: string) => string;
    utilGetSchedule: (values: any) => any;
    utilUpdatePrice: (id: number | string | string[]) => Promise<void>;
    utilValidateCoupon: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useClientRegister = (): UseClientRegisterInterface => {
    const { loadingState } = usePageLoading();

    const router = useRouter();

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
        if (routeParams['id']) {
            await getPrice(routeParams['id'].toString());

            localRegister.formObj['schedule'] = routeParams['id'].toString();
        }

        localRegister.formObj['xpl'] = 'none';
    }

    const getPrice = async (id: number | string | string[]) => {
        loadingState.isActive = true;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`client/register/price/${id}`, 'GET', null);

        localRegister.formObj['amount'] = processorObj.value['amount'];
        localRegister.formObj['class_type'] = processorObj.value['class_type'];

        loadingState.isActive = false;
    };

    const getSchedule = async () => {
        loadingState.isActive = true;

        const { doProcess, processorArr } = await useProcessor();

        await doProcess('client/schedule/search', 'GET', null);

        localRegister.formArr = processorArr.value;

        loadingState.isActive = false;
    };

    const localRegister: UnwrapNestedRefs<any> = reactive({
        formArr: [],
        formErrors: {},
        formObj: {
            address: '',
            amount: '0.00',
            can_email: false,
            city: '',
            class_type: '',
            comment: '',
            coupon_code: '',
            coupon_is_active: false,
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
        nonFieldFormMessage: ''
    });

    const nonFieldFormError = computed(() => {
        return localRegister.nonFieldFormError;
    });

    const nonFieldFormMessage = computed(() => {
        return localRegister.nonFieldFormMessage;
    });

    const submitRegistration = async (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('client/register/index', 'POST', values);

        if (!processorSuccess.value) {
            if ('non_field_errors' in processorErrors.value) {
                localRegister.nonFieldFormError = true;

                localRegister.nonFieldFormMessage = processorErrors.value['non_field_errors'];
            } else {
                actions.setErrors(processorErrors.value);
            }
        } else {
            await router.push({ path: `/register/confirmation/${values['class_type']}` });
        }

        loadingState.isActive = false;
    }

    const utilClassDate = (date_from: string, date_to: string) => {
        const dayjs = useDayjs();

        const start = dayjs(date_from).format('MMM D');
        const end = dayjs(date_to).format('D, YYYY');

        const start_day = dayjs(date_from).format('D');
        const end_day = dayjs(date_to).format('D');

        const start_month = dayjs(date_from).format('MM');
        const end_month = dayjs(date_to).format('MM');

        if (date_from === date_to) {
            return start + dayjs(date_to).format(', YYYY');
        } else if (start_month.padStart(2, '0') > end_month.padStart(2, '0')) {
            return dayjs(date_from).format('MMM D, YYYY') + '-' + dayjs(date_to).format('MMM D, YYYY');
        } else if (start_day.padStart(2, '0') > end_day.padStart(2, '0')) {
            return start + '-' + dayjs(date_to).format('MMM D, YYYY');
        } else {
            return start + '-' + end;
        }
    }

    const utilGetSchedule = (values: any) => {
        const schedule: { [index: string]: any; } = {};

        values.forEach((val: any) => {
            if (val['seats'] > 0) {
                const class_type = val['class_type_name'];

                const dates = utilClassDate(val['date_from'], val['date_to']);

                const day_type = val['day_type_name'];

                schedule[val['id']] = dates + ' | ' + day_type + ' | ' + class_type;
            }
        });

        return schedule;
    }

    const utilUpdatePrice = async (id: number | string | string[]) => {
        loadingState.isActive = true;

        localRegister.formObj['coupon_is_active'] = false;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`client/register/price/${id}`, 'GET', null);

        localRegister.formObj['amount'] = processorObj.value['amount'];
        localRegister.formObj['class_type'] = processorObj.value['class_type'];

        loadingState.isActive = false;
    }

    const utilValidateCoupon = async (values: Record<string, any>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`client/coupon/validate/${values['coupon_code'].toLowerCase()}/${localRegister.formObj['class_type']}`, 'GET', null);

        if (processorObj.value['error']) {
            actions.setErrors(processorObj.value['errors']);

            localRegister.formObj['coupon_is_active'] = false;

            localRegister.formObj['coupon_code'] = '';
        } else {
            const finalPrice = parseInt(localRegister.formObj['amount']) - parseInt(<string>processorObj.value['amount']);

            localRegister.formObj['amount'] = finalPrice.toString();

            localRegister.formObj['coupon_is_active'] = true;

            localRegister.formObj['coupon_code'] = values['coupon_code'].toLowerCase();
        }
    }

    return {
        formArr,
        formErrors,
        formObj,
        formSuccess,
        getDefaults,
        getPrice,
        getSchedule,
        nonFieldFormError,
        nonFieldFormMessage,
        submitRegistration,
        utilClassDate,
        utilGetSchedule,
        utilUpdatePrice,
        utilValidateCoupon
    };
};