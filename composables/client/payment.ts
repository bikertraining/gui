import { type ComputedRef, type UnwrapNestedRefs } from "vue";

interface UseClientPaymentInterface {
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        amount: string;
        address: string;
        city: string;
        class_type: string;
        coupon_code: string;
        coupon_is_active: boolean;
        credit_card_cvv2: string;
        credit_card_first_name: string;
        credit_card_last_name: string;
        credit_card_month: string;
        credit_card_number: string;
        credit_card_year: string;
        email: string;
        first_name: string;
        ipaddress: string;
        last_name: string;
        phone: string;
        process_amount: string;
        state: string;
        zipcode: string;
    }>;
    getIpaddress: () => Promise<void>;
    getPrice: (class_type: string | string[]) => Promise<void>;
    nonFieldFormError: ComputedRef<boolean>;
    nonFieldFormMessage: ComputedRef<string>;
    submitPayment: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    utilValidateCoupon: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useClientPayment = (): UseClientPaymentInterface => {
    const { getFraud } = useClientFraud();

    const { loadingState } = usePageLoading();

    const router = useRouter();

    const formErrors = computed(() => {
        return localPayment.formErrors;
    });

    const formObj = computed(() => {
        return localPayment.formObj;
    });

    const getIpaddress = async () => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess('client/whatsmyip/', 'GET', null);

        localPayment.formObj['ipaddress'] = processorObj.value;
    };

    const getPrice = async (class_type: string | string[]) => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`client/payment/${class_type}/price`, 'GET', null);

        localPayment.formObj['amount'] = processorObj.value['amount'];
        localPayment.formObj['class_type'] = processorObj.value['class_type'];
        localPayment.formObj['process_amount'] = processorObj.value['process_amount'];
    };

    const localPayment: UnwrapNestedRefs<any> = reactive({
        formErrors: {},
        formObj: {
            address: '',
            amount: '0.00',
            city: '',
            class_type: '',
            coupon_code: '',
            coupon_is_active: false,
            credit_card_cvv2: '',
            credit_card_first_name: '',
            credit_card_last_name: '',
            credit_card_month: '',
            credit_card_number: '',
            credit_card_year: '',
            email: '',
            first_name: '',
            ipaddress: '',
            last_name: '',
            phone: '',
            process_amount: '0.00',
            state: '',
            zipcode: ''
        },
        nonFieldFormError: false,
        nonFieldFormMessage: ''
    });

    const nonFieldFormError = computed(() => {
        return localPayment.nonFieldFormError;
    });

    const nonFieldFormMessage = computed(() => {
        return localPayment.nonFieldFormMessage;
    });

    const submitPayment = async (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        // Check for fraud before processing the payment, if found then redirect to another page.
        // @ts-ignore
        await getFraud(values);

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('client/payment/', 'POST', values);

        if (!processorSuccess.value) {
            if ('non_field_errors' in processorErrors.value) {
                localPayment.nonFieldFormError = true;

                localPayment.nonFieldFormMessage = processorErrors.value['non_field_errors'];

                await router.push({ path: `/payment/failed/${values['class_type']}/${processorErrors.value['non_field_errors']}` });
            } else {
                actions.setErrors(processorErrors.value);
            }
        } else {
            await router.push({ path: `/payment/${values['class_type']}/confirmation` });
        }

        loadingState.isActive = false;
    };

    const utilValidateCoupon = async (values: Record<string, any>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`client/coupon/validate/${values['coupon_code'].toLowerCase()}/${values['class_type']}`, 'GET', null);

        if (processorObj.value['error']) {
            actions.setErrors(processorObj.value['errors']);

            localPayment.formObj['coupon_is_active'] = false;

            localPayment.formObj['coupon_code'] = '';
        } else {
            const finalPrice = parseInt(localPayment.formObj['amount']) - parseInt(<string>processorObj.value['amount']);

            localPayment.formObj['amount'] = finalPrice.toString();

            localPayment.formObj['coupon_is_active'] = true;

            localPayment.formObj['coupon_code'] = values['coupon_code'].toLowerCase();
        }

        loadingState.isActive = false;
    }

    return {
        formErrors,
        formObj,
        getIpaddress,
        getPrice,
        nonFieldFormError,
        nonFieldFormMessage,
        submitPayment,
        utilValidateCoupon
    };
};