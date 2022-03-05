import { reactive } from "vue";

interface UsePageLoadingInterface {
    loadingState: {
        isActive: boolean;
    };
}

const loadingState = reactive({
    isActive: true
});

export const usePageLoading = (): UsePageLoadingInterface => {
    return {
        loadingState
    };
};