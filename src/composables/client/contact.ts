import { processor, usePageLoading } from "@/composables";
import { computed, ComputedRef, reactive } from "vue";

interface UseClientContactInterface {
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        email: string;
        message: string;
        name: string;
        phone: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    sendEmail: (values: Record<string, unknown>) => Promise<void>;
}

export const useClientContact = (): UseClientContactInterface => {
    const { loadingState } = usePageLoading();

    const formErrors = computed(() => {
        return localContact.formErrors;
    });

    const formObj = computed(() => {
        return localContact.formObj;
    });

    const formSuccess = computed(() => {
        return localContact.formSuccess;
    });

    const localContact = reactive({
        formErrors: {},
        formObj: {
            email: '',
            message: '',
            name: '',
            phone: ''
        },
        formSuccess: false,
    });

    const sendEmail = async (values: Record<string, unknown>) => {
        loadingState.isActive = true;

        const response = await processor.post(
            `client/contact/index`,
            values
        );

        if (response.error) {
            localContact.formErrors = response.errors;
        } else {
            localContact.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    return {
        formErrors,
        formObj,
        formSuccess,
        sendEmail
    };
};