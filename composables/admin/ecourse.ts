import {type ComputedRef, type UnwrapNestedRefs} from "vue";

interface UseAdminEcourseInterface {
    formObj: ComputedRef<{
        link_3wbrc: string;
        link_brc_e3: string;
        link_brc_e5: string;
        link_src: string;
    }>;
    getEdit: () => Promise<void>;
    updateEcourse: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminEcourse = (): UseAdminEcourseInterface => {
    const {$event} = useNuxtApp();

    const {loadingState} = usePageLoading();

    const router = useRouter();

    const formObj = computed(() => {
        return localEcourse.formObj;
    });

    const getEdit = async () => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess('admin/ecourse/search', 'GET', null);

        localEcourse.formObj = processorObj.value;
    };

    const localEcourse: UnwrapNestedRefs<any> = reactive({
        formObj: {
            link_3wbrc: '',
            link_brc_e3: '',
            link_brc_e5: '',
            link_src: ''
        }
    });

    const updateEcourse = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

        await doProcess('admin/ecourse/search', 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'eCourse links have been updated.',
                type: 'success'
            });

            await router.push({path: '/admin/ecourse'});
        }

        loadingState.isActive = false;
    };

    return {
        formObj,
        getEdit,
        updateEcourse
    };
};