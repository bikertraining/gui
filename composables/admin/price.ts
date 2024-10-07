import {type ComputedRef, type UnwrapNestedRefs} from "vue";

interface UseAdminPriceInterface {
    choices: ComputedRef<Record<string, string>>;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        amount: string;
        class_type: string;
        class_type_name: string;
        is_active: string;
        process_amount: string;
        re_amount: string;
    }>;
    getChoices: () => Promise<void>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updatePrice: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminPrice = (): UseAdminPriceInterface => {
    const {$event} = useNuxtApp();

    const {loadingState} = usePageLoading();

    const router = useRouter();

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

    const getChoices = async () => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess('admin/price/choices', 'GET', null);

        localPrice.choices = processorObj.value;
    };

    const getEdit = async (id: string) => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess(`admin/price/${id}/edit`, 'GET', null);

        localPrice.formObj = processorObj.value;
    };

    const getSearch = async () => {
        const {doProcess, processorArr} = await useProcessor();

        await doProcess('admin/price/search', 'GET', null);

        localPrice.formArr = processorArr.value;
    };

    const localPrice: UnwrapNestedRefs<any> = reactive({
        choices: {},
        formArr: [],
        formErrors: {},
        formObj: {
            amount: '',
            class_type: '',
            class_type_name: '',
            is_active: '',
            process_amount: '',
            re_amount: ''
        }
    });

    const updatePrice = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

        await doProcess(`admin/price/${values['id']}/edit`, 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Price has been updated.',
                type: 'success'
            });

            await router.push({path: '/admin/price'});
        }

        loadingState.isActive = false;
    };

    return {
        choices,
        formArr,
        formErrors,
        formObj,
        getChoices,
        getEdit,
        getSearch,
        updatePrice
    };
};