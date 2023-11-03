import { type ComputedRef, type UnwrapNestedRefs } from "vue";

interface UseAdminCoachInterface {
    createCoach: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    deleteCoach: (values: { id: string; }) => Promise<boolean>;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        address: string;
        city: string;
        date_to: string;
        email: string;
        frtp_date_from: string;
        msf_id: string;
        name: string;
        phone: string;
        state: string;
        zipcode: string;
    }>;
    frtp_expiration: (value: string) => number;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    msf_expiration: (value: string) => number;
    updateCoach: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAdminCoach = (): UseAdminCoachInterface => {
    const { $event } = useNuxtApp();

    const { loadingState } = usePageLoading();

    const router = useRouter();

    const createCoach = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        values['date_to'] = dayjs(values['date_to']).format('YYYY-MM-DD');
        values['frtp_date_from'] = dayjs(values['frtp_date_from']).format('YYYY-MM-DD');

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess('admin/coach/create', 'POST', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Coach has been created.',
                type: 'success'
            });

            await router.push({ path: '/admin/coach' });
        }

        loadingState.isActive = false;
    };

    const dayjs = useDayjs();

    const deleteCoach = async (values: { id: string; }) => {
        loadingState.isActive = true;

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/coach/${values['id']}/delete`, 'DELETE', null);

        if (!processorSuccess.value) {
            localCoach.formErrors = processorErrors.value;
        }

        loadingState.isActive = false;

        return processorSuccess.value;
    };

    const formArr = computed(() => {
        return localCoach.formArr;
    });

    const formErrors = computed(() => {
        return localCoach.formErrors;
    });

    const formObj = computed(() => {
        return localCoach.formObj;
    });

    const frtp_expiration = (value: string) => {
        const frtp_date = new Date(dayjs(value).format('MM/DD/YYYY'));
        const current_date = new Date(dayjs(new Date()).format('MM/DD/YYYY'));

        const diff_time = current_date.getTime() - frtp_date.getTime();

        return diff_time / (1000 * 3600 * 24);
    };

    const getEdit = async (id: string) => {
        const { doProcess, processorObj } = await useProcessor();

        await doProcess(`admin/coach/${id}/edit`, 'GET', null);

        localCoach.formObj['date_to'] = dayjs(localCoach.formObj['date_to']).format('YYYY/MM/DD');
        localCoach.formObj['frtp_date_from'] = dayjs(localCoach.formObj['frtp_date_from']).format('YYYY/MM/DD');

        localCoach.formObj = processorObj.value;
    };

    const getSearch = async () => {
        const { doProcess, processorArr } = await useProcessor();

        await doProcess('admin/coach/search', 'GET', null);

        localCoach.formArr = processorArr.value
    };

    const localCoach: UnwrapNestedRefs<any> = reactive({
        formArr: [],
        formErrors: {},
        formObj: {
            address: '',
            city: '',
            date_to: '',
            email: '',
            frtp_date_from: '',
            msf_id: '',
            name: '',
            phone: '',
            state: '',
            zipcode: ''
        }
    });

    const msf_expiration = (value: string) => {
        const current_month: any = dayjs(new Date()).format('M');
        const current_year: any = dayjs(new Date()).format('YYYY');

        const msf_month: any = dayjs(value).format('M');
        const msf_year: any = dayjs(value).format('YYYY');

        return msf_month - current_month + (12 * (msf_year - current_year));
    };

    const updateCoach = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        values['date_to'] = dayjs(values['date_to']).format('YYYY-MM-DD');
        values['frtp_date_from'] = dayjs(values['frtp_date_from']).format('YYYY-MM-DD');

        const { doProcess, processorErrors, processorSuccess } = await useProcessor();

        await doProcess(`admin/coach/${values['id']}/edit`, 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Coach has been updated.',
                type: 'success'
            });

            await router.push({ path: '/admin/coach' });
        }

        loadingState.isActive = false;
    };

    return {
        createCoach,
        deleteCoach,
        formArr,
        formErrors,
        formObj,
        frtp_expiration,
        getEdit,
        getSearch,
        msf_expiration,
        updateCoach
    };
};