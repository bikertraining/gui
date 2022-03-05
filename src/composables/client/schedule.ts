import { processor, usePageLoading } from "@/composables";
import { computed, ComputedRef, reactive } from "vue";

interface UseClientScheduleInterface {
    formArr: ComputedRef<string[]>;
    getSearch: () => Promise<void>;
}

export const useClientSchedule = (): UseClientScheduleInterface => {
    const { loadingState } = usePageLoading();

    const formArr = computed(() => {
        return localSchedule.formArr;
    });

    const getSearch = async () => {
        loadingState.isActive = true;

        localSchedule.formArr = await processor.get(
            'client/schedule/search'
        );

        loadingState.isActive = false;
    };

    const localSchedule = reactive({
        formArr: []
    });

    return {
        formArr,
        getSearch
    };
};