import { processor, usePageLoading } from "@/composables";
import { computed, ComputedRef, reactive } from "vue";

interface UseClientPriceInterface {
    formArr: ComputedRef<string[]>;
    formObj: ComputedRef<{
        '3wbrc': {
            amount: string;
            class_type: string;
            id: string;
            is_active: string;
            process_amount: string;
            re_amount: string;
        };
        brc: {
            amount: string;
            class_type: string;
            id: string;
            is_active: string;
            process_amount: string;
            re_amount: string;
        };
        erc: {
            amount: string;
            class_type: string;
            id: string;
            is_active: string;
            process_amount: string;
            re_amount: string;
        };
        ime: {
            amount: string;
            class_type: string;
            id: string;
            is_active: string;
            process_amount: string;
            re_amount: string;
        };
        private: {
            amount: string;
            class_type: string;
            id: string;
            is_active: string;
            process_amount: string;
            re_amount: string;
        };
    }>;
    getPrices: () => Promise<void>;
}

export const useClientPrice = (): UseClientPriceInterface => {
    const { loadingState } = usePageLoading();

    const formArr = computed(() => {
        return localPrice.formArr;
    });

    const formObj = computed(() => {
        return localPrice.formObj;
    });

    const getPrices = async () => {
        loadingState.isActive = true;

        localPrice.formArr = await processor.get(
            'client/price/search'
        );

        Object.values(localPrice.formArr).forEach(key => {
            localPrice.formObj[key['class_type']] = key;
        });

        loadingState.isActive = false;
    };

    const localPrice = reactive({
        formArr: [],
        formObj: {
            '3wbrc': {
                amount: '',
                class_type: '',
                id: '',
                is_active: '',
                process_amount: '',
                re_amount: ''
            },
            brc: {
                amount: '',
                class_type: '',
                id: '',
                is_active: '',
                process_amount: '',
                re_amount: ''
            },
            erc: {
                amount: '',
                class_type: '',
                id: '',
                is_active: '',
                process_amount: '',
                re_amount: ''
            },
            ime: {
                amount: '',
                class_type: '',
                id: '',
                is_active: '',
                process_amount: '',
                re_amount: ''
            },
            private: {
                amount: '',
                class_type: '',
                id: '',
                is_active: '',
                process_amount: '',
                re_amount: ''
            }
        }
    });

    return {
        formArr,
        formObj,
        getPrices
    };
};