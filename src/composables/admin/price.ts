import { processor, usePageLoading } from "@/composables";
import { computed, ComputedRef, reactive } from "vue";

interface UseAdminPriceInterface {
    choices: ComputedRef<Record<string, string>>;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        amount: string;
        class_type: string;
        class_type_name: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    getChoices: () => Promise<void>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updatePrice: (id: string, values: Record<string, unknown>) => Promise<void>;
}

export const useAdminPrice = (): UseAdminPriceInterface => {
    const { loadingState } = usePageLoading();

    const choices = computed(() => {
        return localPrice.choices;
    });

    const formArr = computed(() => {
        return localPrice.formArr;
    });

    const formErrors = computed(() => {
        return localPrice.formErrors;
    });

    const formObj = computed(() => {
        return localPrice.formObj;
    });

    const formSuccess = computed(() => {
        return localPrice.formSuccess;
    });

    const getChoices = async () => {
        localPrice.choices = await processor.get(
            'admin/price/choices'
        );
    };

    const getEdit = async (id: string) => {
        loadingState.isActive = true;

        localPrice.formObj = await processor.get(
            `admin/price/edit/${id}`
        );

        loadingState.isActive = false;
    };

    const getSearch = async () => {
        loadingState.isActive = true;

        localPrice.formArr = await processor.get(
            'admin/price/search'
        );

        loadingState.isActive = false;
    };

    const localPrice = reactive({
        choices: {},
        formArr: [],
        formErrors: {},
        formObj: {
            amount: '',
            class_type: '',
            class_type_name: ''
        },
        formSuccess: false
    });

    const updatePrice = async (id: string, values: Record<string, unknown>) => {
        loadingState.isActive = true;

        const response = await processor.patch(
            `admin/price/edit/${id}`,
            values
        );

        if (response.error) {
            localPrice.formErrors = response.errors;
        } else {
            localPrice.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    return {
        choices,
        formArr,
        formErrors,
        formObj,
        formSuccess,
        getChoices,
        getEdit,
        getSearch,
        updatePrice
    };
};