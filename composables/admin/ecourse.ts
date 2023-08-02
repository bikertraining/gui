import { ComputedRef, UnwrapNestedRefs } from "vue";

interface UseAdminEcourseInterface {
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        link_3wbrc: string;
        link_brc_e5: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    getEdit: () => Promise<void>;
    updateEcourse: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminEcourse = (): UseAdminEcourseInterface => {
    const { loadingState } = usePageLoading();

    const { $event } = useNuxtApp();

    const router = useRouter();

    const formErrors = computed(() => {
        return localEcourse.formErrors;
    });

    const formObj = computed(() => {
        return localEcourse.formObj;
    });

    const formSuccess = computed(() => {
        return localEcourse.formSuccess;
    });

    const getEdit = async () => {
        loadingState.isActive = true;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess('admin/ecourse/index', 'GET', null);

        localEcourse.formObj = processorObj.value;

        loadingState.isActive = false;
    };

    const localEcourse: UnwrapNestedRefs<any> = reactive({
        formErrors: {},
        formObj: {
            link_3wbrc: '',
            link_brc_e5: ''
        },
        formSuccess: false
    });

    const updateEcourse = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('admin/ecourse/index', 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'eCourse links have been updated.',
                type: 'success'
            });

            await router.push({ path: '/admin/ecourse' });
        }

        loadingState.isActive = false;
    };

    return {
        formErrors,
        formObj,
        formSuccess,
        getEdit,
        updateEcourse
    };
};