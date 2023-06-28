import { computed, ComputedRef, reactive, UnwrapNestedRefs } from "vue";

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
    formSuccess: ComputedRef<boolean>;
    getChoices: () => Promise<void>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updatePrice: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminPrice = (): UseAdminPriceInterface => {
    const { loadingState } = usePageLoading();

    const { $event } = useNuxtApp();

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

    const formSuccess = computed(() => {
        return localPrice.formSuccess;
    });

    const getChoices = async () => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess('admin/price/choices', 'GET', null);

        localPrice.choices = processorObj.value;
    };

    const getEdit = async (id: string) => {
        loadingState.isActive = true;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`admin/price/edit/${id}`, 'GET', null);

        localPrice.formObj = processorObj.value;

        loadingState.isActive = false;
    };

    const getSearch = async () => {
        loadingState.isActive = true;

        const { doProcess, processorArr } = await useProcessor();

        await doProcess('admin/price/search', 'GET', null);

        localPrice.formArr = processorArr.value;

        loadingState.isActive = false;
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
        },
        formSuccess: false
    });

    const updatePrice = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/price/edit/${values['id']}`, 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Price has been updated.',
                type: 'success'
            });

            await router.push({ path: '/admin/price' });
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