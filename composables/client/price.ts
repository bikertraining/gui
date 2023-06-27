import { computed, ComputedRef, reactive, UnwrapNestedRefs } from "vue";

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

        const { doProcess, processorArr } = await useProcessor();

        await doProcess('client/price/search', 'GET', null);

        localPrice.formArr = processorArr.value;

        Object.values(processorArr.value).forEach(key => {
            // @ts-ignore
            localPrice.formObj[key['class_type']] = key;
        });

        loadingState.isActive = false;
    };

    const localPrice: UnwrapNestedRefs<any> = reactive({
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