import { computed, ComputedRef, reactive, ref, UnwrapNestedRefs } from "vue";

interface UseAdminContactInterface {
    createContact: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    deleteContact: (values: { id: string; }) => Promise<boolean>;
    emailContacts: (arr: string[]) => string;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        email: string;
        name: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updateContact: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminContact = (): UseAdminContactInterface => {
    const { loadingState } = usePageLoading();

    const { $event } = useNuxtApp();

    const router = useRouter();

    const { getBusinessEmail } = useUtils();

    const createContact = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('admin/contact/create', 'POST', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Contact has been created.',
                type: 'success'
            });

            await router.push({ path: '/admin/contact' });
        }

        loadingState.isActive = false;
    };

    const deleteContact = async (values: { id: string; }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/contact/delete/${values['id']}`, 'DELETE', null);

        if (!processorSuccess.value) {
            localContact.formErrors = processorErrors.value;
        } else {
            localContact.formSuccess = true;
        }

        loadingState.isActive = false;

        return processorSuccess.value;
    };

    const emailContacts = (arr: string[]): string => {
        let addresses = `${getBusinessEmail()}?bcc=`;

        arr.forEach((val: any) => {
            addresses += `${val['email']}; `;
        });

        return addresses.trim();
    };

    const formArr = computed(() => {
        return localContact.formArr;
    });

    const formErrors = computed(() => {
        return localContact.formErrors;
    });

    const formObj = computed(() => {
        return localContact.formObj;
    });

    const formSuccess = computed(() => {
        return localContact.formSuccess;
    });

    const getEdit = async (id: string) => {
        loadingState.isActive = true;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`admin/contact/edit/${id}`, 'GET', null);

        localContact.formObj = processorObj.value;

        loadingState.isActive = false;
    };

    const getSearch = async () => {
        loadingState.isActive = true;

        const { doProcess, processorArr } = await useProcessor();

        await doProcess('admin/contact/search', 'GET', null);

        localContact.formArr = processorArr.value

        loadingState.isActive = false;
    };

    const localContact: UnwrapNestedRefs<any> = reactive({
        formArr: [],
        formErrors: {},
        formObj: {
            email: '',
            name: ''
        },
        formSuccess: false
    });

    const updateContact = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/contact/edit/${values['id']}`, 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Contact has been updated.',
                type: 'success'
            });

            await router.push({ path: '/admin/contact' });
        }

        loadingState.isActive = false;
    };

    return {
        createContact,
        deleteContact,
        emailContacts,
        formArr,
        formErrors,
        formObj,
        formSuccess,
        getEdit,
        getSearch,
        updateContact
    };
};