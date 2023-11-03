import { type ComputedRef, type UnwrapNestedRefs } from "vue";

interface UseAdminFraudInterface {
    choices: ComputedRef<Record<string, string>>;
    createFraud: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    deleteFraud: (values: { id: string; }) => Promise<boolean>;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        fraud_type: string;
        name: string;
    }>;
    getChoices: () => Promise<void>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updateFraud: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminFraud = (): UseAdminFraudInterface => {
    const { $event } = useNuxtApp();

    const { loadingState } = usePageLoading();

    const router = useRouter();

    const choices = computed(() => {
        return localFraud.choices;
    });

    const createFraud = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }): Promise<void> => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('admin/fraud/create', 'POST', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Fraud string has been created.',
                type: 'success'
            });

            await router.push({ path: '/admin/fraud' });
        }

        loadingState.isActive = false;
    };

    const deleteFraud = async (values: { id: string; }): Promise<boolean> => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/fraud/${values['id']}/delete`, 'DELETE', null);

        if (!processorSuccess.value) {
            localFraud.formErrors = processorErrors.value;
        }

        loadingState.isActive = false;

        return processorSuccess.value;
    };

    const formArr = computed(() => {
        return localFraud.formArr;
    });

    const formErrors = computed(() => {
        return localFraud.formErrors;
    });

    const formObj = computed(() => {
        return localFraud.formObj;
    });

    const getChoices = async (): Promise<void> => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess('admin/fraud/choices', 'GET', null);

        localFraud.choices = processorObj.value;
    };

    const getEdit = async (id: string): Promise<void> => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`admin/fraud/${id}/edit`, 'GET', null);

        localFraud.formObj = processorObj.value;
    };

    const getSearch = async (): Promise<void> => {
        const { doProcess, processorArr } = await useProcessor();

        await doProcess('admin/fraud/search', 'GET', null);

        localFraud.formArr = processorArr.value
    };

    const localFraud: UnwrapNestedRefs<any> = reactive({
        choices: {},
        formArr: [],
        formErrors: {},
        formObj: {
            fraud_type: '',
            name: ''
        }
    });

    const updateFraud = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }): Promise<void> => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/fraud/${values['id']}/edit`, 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Fraud string has been updated.',
                type: 'success'
            });

            await router.push({ path: '/admin/fraud' });
        }

        loadingState.isActive = false;
    };

    return {
        choices,
        createFraud,
        deleteFraud,
        formArr,
        formErrors,
        formObj,
        getChoices,
        getEdit,
        getSearch,
        updateFraud
    };
};