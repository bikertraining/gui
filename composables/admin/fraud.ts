import { ComputedRef, UnwrapNestedRefs } from "vue";

/**
 * UseAdminFraudInterface represents the interface for managing frauds in the admin app.
 *
 * @interface
 */
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
    formSuccess: ComputedRef<boolean>;
    getChoices: () => Promise<void>;
    getEdit: (fraud_id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updateFraud: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

/**
 * Function to interact with the Admin Fraud module.
 * @returns {UseAdminFraudInterface} The object with the available functions and data.
 */
export const useAdminFraud = (): UseAdminFraudInterface => {
    const { loadingState } = usePageLoading();

    const { $event } = useNuxtApp();

    const router = useRouter();

    const choices = computed(() => {
        return localFraud.choices;
    });

    /**
     * Creates a fraud string in the system.
     *
     * @param {Record<string, string>} values - The values needed to create a fraud string.
     * @param {Object} actions - The actions object containing the setErrors method.
     * @param {function} actions.setErrors - The method used to set any errors that occurred during the creation process.
     *
     * @returns {Promise<void>} - A Promise that resolves with no value when the fraud string creation is complete.
     */
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

    /**
     * Delete fraud record from the admin portal.
     *
     * @param {Object} values - The values needed to delete the fraud record.
     * @param {string} values.id - The ID of the fraud record to be deleted.
     *
     * @returns {Promise<boolean>} - The success flag indicating if the delete operation was successful.
     */
    const deleteFraud = async (values: { id: string; }): Promise<boolean> => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/fraud/${values['id']}/delete`, 'DELETE', null);

        if (!processorSuccess.value) {
            localFraud.formErrors = processorErrors.value;
        } else {
            localFraud.formSuccess = true;
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

    const formSuccess = computed(() => {
        return localFraud.formSuccess;
    });

    /**
     * Retrieves the fraud choices from the server.
     * @returns {Promise<void>} A Promise that resolves with void.
     */
    const getChoices = async (): Promise<void> => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess('admin/fraud/choices', 'GET', null);

        localFraud.choices = processorObj.value;
    };

    /**
     * Performs an edit operation for the specified id.
     *
     * @param {string} fraud_id - The id of the item to be edited.
     * @returns {Promise<void>} - A Promise that resolves when the edit operation is complete.
     */
    const getEdit = async (fraud_id: string): Promise<void> => {
        loadingState.isActive = true;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`admin/fraud/${fraud_id}/edit`, 'GET', null);

        localFraud.formObj = processorObj.value;

        loadingState.isActive = false;
    };

    /**
     * Executes a search operation to retrieve fraud data.
     *
     * @returns {Promise<void>} - A promise that resolves when the search operation is completed.
     */
    const getSearch = async (): Promise<void> => {
        loadingState.isActive = true;

        const { doProcess, processorArr } = await useProcessor();

        await doProcess('admin/fraud/search', 'GET', null);

        localFraud.formArr = processorArr.value

        loadingState.isActive = false;
    };

    const localFraud: UnwrapNestedRefs<any> = reactive({
        choices: {},
        formArr: [],
        formErrors: {},
        formObj: {
            fraud_type: '',
            name: ''
        },
        formSuccess: false
    });

    /**
     * Updates the fraud string in the database.
     *
     * @param {Record<string, string>} values - The new values for the fraud string.
     * @param {Object} actions - The actions object containing the setErrors function.
     * @param {Function} actions.setErrors - The function to set the error messages.
     *
     * @returns {Promise<void>} - A promise that resolves when the update is complete.
     */
    const updateFraud = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }): Promise<void> => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/fraud/${values['fraud_id']}/edit`, 'PATCH', values);

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
        formSuccess,
        getChoices,
        getEdit,
        getSearch,
        updateFraud
    };
};