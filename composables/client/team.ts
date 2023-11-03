import { type ComputedRef, type UnwrapNestedRefs } from "vue";

interface UseClientTeamInterface {
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

export const useClientTeam = (): UseClientTeamInterface => {
    const { loadingState } = usePageLoading();

    const router = useRouter();

    const formErrors = computed(() => {
        return localTeam.formErrors;
    });

    const formObj = computed(() => {
        return localTeam.formObj;
    });

    const localTeam: UnwrapNestedRefs<any> = reactive({
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

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('client/team/', 'POST', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            await router.push({ path: '/team/confirmation' });
        }

        loadingState.isActive = false;
    };

    return {
        formErrors,
        formObj,
        submitContact
    };
};