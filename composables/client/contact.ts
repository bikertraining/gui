import { computed, ComputedRef, reactive, UnwrapNestedRefs } from "vue";

interface UseClientContactInterface {
    deleteContact: (email: string) => void;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        can_email: boolean;
        email: string;
        message: string;
        name: string;
        phone: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    submitContact: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useClientContact = (): UseClientContactInterface => {
    const { loadingState } = usePageLoading();

    const router = useRouter();

    const deleteContact = async (email: string) => {
        loadingState.isActive = true;

        const { doProcess, processorSuccess } = await useProcessor();

        await doProcess(`client/contact/unsubscribe/${email}`, 'DELETE', null);

        localContact.formSuccess = true;

        loadingState.isActive = false;

        await router.push({ path: '/contact/unsubscribe/confirmation' });
    };

    const formErrors = computed(() => {
        return localContact.formErrors;
    });

    const formObj = computed(() => {
        return localContact.formObj;
    });

    const formSuccess = computed(() => {
        return localContact.formSuccess;
    });

    const localContact: UnwrapNestedRefs<any> = reactive({
        formErrors: {},
        formObj: {
            can_email: false,
            email: '',
            message: '',
            name: '',
            phone: ''
        },
        formSuccess: false
    });

    const submitContact = async (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('client/contact/index', 'POST', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            await router.push({ path: '/contact/confirmation' });
        }

        loadingState.isActive = false;
    }

    return {
        deleteContact,
        formErrors,
        formObj,
        formSuccess,
        submitContact
    };
};