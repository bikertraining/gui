import { computed, ComputedRef, reactive, UnwrapNestedRefs } from "vue";

interface UseClientEcourseInterface {
    formObj: ComputedRef<{
        link_3wbrc: string;
        link_brc_e5: string;
    }>;
    getEcourseLink: () => Promise<void>;
}

export const useClientEcourse = (): UseClientEcourseInterface => {
    const { loadingState } = usePageLoading();

    const formObj = computed(() => {
        return localEcourse.formObj;
    });

    const getEcourseLink = async () => {
        loadingState.isActive = true;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess('client/ecourse/index', 'GET', null);

        localEcourse.formObj = processorObj.value;

        loadingState.isActive = false;
    };

    const localEcourse: UnwrapNestedRefs<any> = reactive({
        formObj: {
            link_3wbrc: '',
            link_brc_e5: ''
        }
    });

    return {
        formObj,
        getEcourseLink
    };
};