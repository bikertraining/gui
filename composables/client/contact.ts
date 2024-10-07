import {computed, type ComputedRef, reactive, type UnwrapNestedRefs} from "vue";

interface UseClientContactInterface {
    deleteContact: (email: string) => Promise<void>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        email: string;
        message: string;
        name: string;
        phone: string;
    }>;
    submitContact: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useClientContact = (): UseClientContactInterface => {
    const {loadingState} = usePageLoading();

    const router = useRouter();

    const deleteContact = async (email: string) => {
        loadingState.isActive = true;

        const {doProcess} = await useProcessor();

        await doProcess(`client/contact/${email}/unsubscribe`, 'DELETE', null);

        loadingState.isActive = false;

        await router.push({path: '/contact/unsubscribe/confirmation'});
    };

    const formErrors = computed(() => {
        return localContact.formErrors;
    });

    const formObj = computed(() => {
        return localContact.formObj;
    });

    const localContact: UnwrapNestedRefs<any> = reactive({
        formErrors: {},
        formObj: {
            email: '',
            message: '',
            name: '',
            phone: ''
        }
    });

    const submitContact = async (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

        await doProcess('client/contact/', 'POST', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            await router.push({path: '/contact/confirmation'});
        }

        loadingState.isActive = false;
    }

    return {
        deleteContact,
        formErrors,
        formObj,
        submitContact
    };
};