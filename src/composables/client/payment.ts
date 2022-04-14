import { processor, usePageLoading } from "@/composables";
import { computed, ComputedRef, reactive } from "vue";

interface UseClientPaymentInterface {
    createPayment: (values: Record<string, unknown>) => Promise<void>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        address: string;
        credit_card_cvv2: string;
        credit_card_month: string;
        credit_card_name: string;
        credit_card_number: string;
        credit_card_year: string;
        email: string;
        first_name: string;
        last_name: string;
        phone: string;
        zipcode: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    nonFieldFormError: ComputedRef<boolean>;
    nonFieldFormMessage: ComputedRef<string>;
}

export const useClientPayment = (): UseClientPaymentInterface => {
    const { loadingState } = usePageLoading();

    const createPayment = async (values: Record<string, unknown>) => {
        loadingState.isActive = true;

        const response = await processor.post(
            `client/payment/index`,
            values
        );

        if (response.error) {
            if ('non_field_errors' in response.errors) {
                localPayment.nonFieldFormError = true;
                localPayment.nonFieldFormMessage = response.errors['non_field_errors'];
            } else {
                localPayment.formErrors = response.errors;
            }
        } else {
            localPayment.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    const formErrors = computed(() => {
        return localPayment.formErrors;
    });

    const formObj = computed(() => {
        return localPayment.formObj;
    });

    const formSuccess = computed(() => {
        return localPayment.formSuccess;
    });

    const localPayment = reactive({
        formErrors: {},
        formObj: {
            address: '',
            credit_card_cvv2: '',
            credit_card_month: '',
            credit_card_name: '',
            credit_card_number: '',
            credit_card_year: '',
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
            zipcode: ''
        },
        formSuccess: false,
        nonFieldFormError: false,
        nonFieldFormMessage: '',
    });

    const nonFieldFormError = computed(() => {
        return localPayment.nonFieldFormError;
    });

    const nonFieldFormMessage = computed(() => {
        return localPayment.nonFieldFormMessage;
    });

    return {
        createPayment,
        formErrors,
        formObj,
        formSuccess,
        nonFieldFormError,
        nonFieldFormMessage
    };
};