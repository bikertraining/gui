import { ComputedRef, UnwrapNestedRefs } from "vue";

interface UseAdminCouponInterface {
    choices: ComputedRef<Record<string, string>>;
    createCoupon: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    deleteCoupon: (values: { id: string; }) => Promise<boolean>;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        amount: string;
        class_type: string;
        class_type_name: string;
        is_active: boolean;
        name: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    getChoices: () => Promise<void>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updateCoupon: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminCoupon = (): UseAdminCouponInterface => {
    const { loadingState } = usePageLoading();

    const { $event } = useNuxtApp();

    const router = useRouter();

    const choices = computed(() => {
        return localCoupon.choices;
    });

    const createCoupon = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('admin/coupon/create', 'POST', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Coupon has been created.',
                type: 'success'
            });

            await router.push({ path: '/admin/coupon' });
        }

        loadingState.isActive = false;
    };

    const deleteCoupon = async (values: { id: string; }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/coupon/delete/${values['id']}`, 'DELETE', null);

        if (!processorSuccess.value) {
            localCoupon.formErrors = processorErrors.value;
        } else {
            localCoupon.formSuccess = true;
        }

        loadingState.isActive = false;

        return processorSuccess.value;
    };

    const formArr = computed(() => {
        return localCoupon.formArr;
    });

    const formErrors = computed(() => {
        return localCoupon.formErrors;
    });

    const formObj = computed(() => {
        return localCoupon.formObj;
    });

    const formSuccess = computed(() => {
        return localCoupon.formSuccess;
    });

    const getChoices = async () => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess('admin/coupon/choices', 'GET', null);

        localCoupon.choices = processorObj.value;
    };

    const getEdit = async (id: string) => {
        loadingState.isActive = true;

        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`admin/coupon/edit/${id}`, 'GET', null);

        localCoupon.formObj = processorObj.value;

        loadingState.isActive = false;
    };

    const getSearch = async () => {
        loadingState.isActive = true;

        const { doProcess, processorArr } = await useProcessor();

        await doProcess('admin/coupon/search', 'GET', null);

        localCoupon.formArr = processorArr.value

        loadingState.isActive = false;
    };

    const localCoupon: UnwrapNestedRefs<any> = reactive({
        choices: {},
        formArr: [],
        formErrors: {},
        formObj: {
            amount: '0.00',
            class_type: '',
            class_type_name: '',
            is_active: false,
            name: ''
        },
        formSuccess: false
    });

    const updateCoupon = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/coupon/edit/${values['id']}`, 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Coupon has been updated.',
                type: 'success'
            });

            await router.push({ path: '/admin/coupon' });
        }

        loadingState.isActive = false;
    };

    return {
        choices,
        createCoupon,
        deleteCoupon,
        formArr,
        formErrors,
        formObj,
        formSuccess,
        getChoices,
        getEdit,
        getSearch,
        updateCoupon
    };
};