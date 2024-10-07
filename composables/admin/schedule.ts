import {type ComputedRef, type UnwrapNestedRefs} from "vue";

interface UseAdminScheduleInterface {
    choices: ComputedRef<Record<string, string>>;
    createSchedule: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    deleteSchedule: (values: { id: string; }) => Promise<boolean>;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        class_type: string;
        date_from: string;
        date_to: string;
        day_type: string;
        price: string;
        seats: string;
    }>;
    getChoices: () => Promise<void>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updateSchedule: (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
    utilClassDate: (date_from: string, date_to: string) => string;
}

export const useAdminSchedule = (): UseAdminScheduleInterface => {
    const {$event} = useNuxtApp();

    const {loadingState} = usePageLoading();

    const router = useRouter();

    const choices = computed(() => {
        return localSchedule.choices;
    });

    const dayjs = useDayjs();

    const createSchedule = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        values['date_from'] = dayjs(values['date_from']).format('YYYY-MM-DD');
        values['date_to'] = dayjs(values['date_to']).format('YYYY-MM-DD');

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

        await doProcess('admin/schedule/create', 'POST', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Schedule has been created.',
                type: 'success'
            });

            await router.push({path: '/admin/schedule'});
        }

        loadingState.isActive = false;
    };

    const deleteSchedule = async (values: { id: string; }) => {
        loadingState.isActive = true;

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

        await doProcess(`admin/schedule/${values['id']}/delete`, 'DELETE', null);

        if (!processorSuccess.value) {
            localSchedule.formErrors = processorErrors.value;
        }

        loadingState.isActive = false;

        return processorSuccess.value;
    };

    const formArr = computed(() => {
        return localSchedule.formArr;
    });

    const formErrors = computed(() => {
        return localSchedule.formErrors;
    });

    const formObj = computed(() => {
        return localSchedule.formObj;
    });

    const getChoices = async () => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess('admin/schedule/choices', 'GET', null);

        localSchedule.choices = processorObj.value;
    };

    const getEdit = async (id: string) => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess(`admin/schedule/${id}/edit`, 'GET', null);

        localSchedule.formObj = processorObj.value;

        localSchedule.formObj['date_from'] = dayjs(localSchedule.formObj['date_from']).format('YYYY/MM/DD');
        localSchedule.formObj['date_to'] = dayjs(localSchedule.formObj['date_to']).format('YYYY/MM/DD');
    };

    const getSearch = async () => {
        const {doProcess, processorArr} = await useProcessor();

        await doProcess('admin/schedule/search', 'GET', null);

        localSchedule.formArr = processorArr.value;
    };

    const localSchedule: UnwrapNestedRefs<any> = reactive({
        choices: {},
        formArr: [],
        formErrors: {},
        formObj: {
            class_type: '',
            date_from: '',
            date_to: '',
            day_type: '',
            price: '',
            seats: ''
        }
    });

    const updateSchedule = async (values: Record<string, string>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        values['date_from'] = dayjs(values['date_from']).format('YYYY-MM-DD');
        values['date_to'] = dayjs(values['date_to']).format('YYYY-MM-DD');

        const {doProcess, processorErrors, processorSuccess} = await useProcessor();

        await doProcess(`admin/schedule/${values['id']}/edit`, 'PATCH', values);

        if (!processorSuccess.value) {
            actions.setErrors(processorErrors.value);
        } else {
            // @ts-ignore
            $event('alert', {
                display: processorSuccess.value,
                message: 'Schedule has been updated.',
                type: 'success'
            });

            await router.push({path: '/admin/schedule'});
        }

        loadingState.isActive = false;
    };

    const utilClassDate = (date_from: string, date_to: string) => {
        const start = dayjs(date_from).format('MMM D');
        const end = dayjs(date_to).format('D, YYYY');

        const start_day = dayjs(date_from).format('D');
        const end_day = dayjs(date_to).format('D');

        const start_month = dayjs(date_from).format('MM');
        const end_month = dayjs(date_to).format('MM');

        if (date_from === date_to) {
            return start + dayjs(date_to).format(', YYYY');
        } else if (start_month.padStart(2, '0') > end_month.padStart(2, '0')) {
            return dayjs(date_from).format('MMM D, YYYY') + '-' + dayjs(date_to).format('MMM D, YYYY');
        } else if (start_day.padStart(2, '0') > end_day.padStart(2, '0')) {
            return start + '-' + dayjs(date_to).format('MMM D, YYYY');
        } else {
            return start + '-' + end;
        }
    }

    return {
        choices,
        createSchedule,
        deleteSchedule,
        formArr,
        formErrors,
        formObj,
        getChoices,
        getEdit,
        getSearch,
        updateSchedule,
        utilClassDate
    };
};