import {type ComputedRef, type UnwrapNestedRefs} from "vue";

interface UseClientEcourseInterface {
    formObj: ComputedRef<{
        link_3wbrc: string;
        link_brc_e3: string;
        link_brc_e5: string;
        link_src: string;
    }>;
    getEcourseLink: () => Promise<void>;
}

export const useClientEcourse = (): UseClientEcourseInterface => {
    const formObj = computed(() => {
        return localEcourse.formObj;
    });

    const getEcourseLink = async () => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess('client/ecourse/search', 'GET', null);

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

    return {
        formObj,
        getEcourseLink
    };
};