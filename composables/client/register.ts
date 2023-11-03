import { type ComputedRef, type UnwrapNestedRefs } from "vue";

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
        ipaddress: string;
        last_name: string;
        phone: string;
        process_amount: string;
        schedule: string;
        schedule_details: object;
        state: string;
        xpl: string;
        zipcode: string;
    }>;
    getDefaults: (routeParams: any) => Promise<void>;
    getIpaddress: () => Promise<void>;
    getPrice: (id: number | string | string[]) => void;
    getSchedule: (id: number | string | string[]) => Promise<void>;
    nonFieldFormError: ComputedRef<boolean>;
    nonFieldFormMessage: ComputedRef<string>;
    submitRegistration: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    utilClassDate: (date_from: string, date_to: string) => string;
    utilValidateCoupon: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useClientRegister = (): UseClientRegisterInterface => {
    const { getFraud } = useClientFraud();

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

    const getDefaults = async (routeParams: any) => {
        await getIpaddress();

        await getPrice(routeParams['id'].toString());

        await getSchedule(routeParams['id'].toString());

        localRegister.formObj['schedule'] = routeParams['id'].toString();

        localRegister.formObj['xpl'] = 'none';
    }

    const getIpaddress = async () => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess('client/whatsmyip/', 'GET', null);

        localRegister.formObj['ipaddress'] = processorObj.value;
    };

    const getPrice = async (id: number | string | string[]) => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`client/register/${id}/price`, 'GET', null);

        localRegister.formObj['amount'] = processorObj.value['amount'];
        localRegister.formObj['class_type'] = processorObj.value['class_type'];
        localRegister.formObj['process_amount'] = processorObj.value['process_amount'];
    };

    const getSchedule = async (id: number | string | string[]) => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`client/schedule/search/${id}/id`, 'GET', null);

        localRegister.formObj['schedule_details'] = processorObj.value;
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
            ipaddress: '',
            last_name: '',
            phone: '',
            process_amount: '0.00',
            schedule: '',
            schedule_details: {},
            state: '',
            xpl: '',
            zipcode: ''
        },
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

        // Check for fraud before processing the payment, if found then redirect to another page.
        // @ts-ignore
        await getFraud(values);

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('client/register/', 'POST', values);

        if (!processorSuccess.value) {
            if ('non_field_errors' in processorErrors.value) {
                localRegister.nonFieldFormError = true;

                localRegister.nonFieldFormMessage = processorErrors.value['non_field_errors'];

                await router.push({ path: `/register/failed/${values['schedule']}/${processorErrors.value['non_field_errors']}` });
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

    const utilValidateCoupon = async (values: Record<string, any>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

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

        loadingState.isActive = false;
    }

    return {
        formArr,
        formErrors,
        formObj,
        getDefaults,
        getIpaddress,
        getPrice,
        getSchedule,
        nonFieldFormError,
        nonFieldFormMessage,
        submitRegistration,
        utilClassDate,
        utilValidateCoupon
    };
};