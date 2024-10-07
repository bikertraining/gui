import {type ComputedRef, type UnwrapNestedRefs} from "vue";

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
    getChoices: () => Promise<void>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updateCoupon: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminCoupon = (): UseAdminCouponInterface => {
    const {$event} = useNuxtApp();

    const {loadingState} = usePageLoading();

    const router = useRouter();

    const choices = computed(() => {
        return localCoupon.choices;
    });

    const createCoupon = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

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

            await router.push({path: '/admin/coupon'});
        }

        loadingState.isActive = false;
    };

    const deleteCoupon = async (values: { id: string; }) => {
        loadingState.isActive = true;

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

        await doProcess(`admin/coupon/${values['id']}/delete`, 'DELETE', null);

        if (!processorSuccess.value) {
            localCoupon.formErrors = processorErrors.value;
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

    const getChoices = async () => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess('admin/coupon/choices', 'GET', null);

        localCoupon.choices = processorObj.value;
    };

    const getEdit = async (id: string) => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess(`admin/coupon/${id}/edit`, 'GET', null);

        localCoupon.formObj = processorObj.value;
    };

    const getSearch = async () => {
        const {doProcess, processorArr} = await useProcessor();

        await doProcess('admin/coupon/search', 'GET', null);

        localCoupon.formArr = processorArr.value
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
        }
    });

    const updateCoupon = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

        await doProcess(`admin/coupon/${values['id']}/edit`, 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Coupon has been updated.',
                type: 'success'
            });

            await router.push({path: '/admin/coupon'});
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
        getChoices,
        getEdit,
        getSearch,
        updateCoupon
    };
};