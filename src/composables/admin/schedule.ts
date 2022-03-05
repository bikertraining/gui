import { processor, usePageLoading } from "@/composables";
import dayjs from "dayjs";
import { computed, ComputedRef, reactive } from "vue";

interface UseAdminScheduleInterface {
    choices: ComputedRef<Record<string, string>>;
    createSchedule: (values: Record<string, unknown>) => Promise<void>;
    deleteSchedule: (values: {
        id: string;
    }) => Promise<void>;
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
    formSuccess: ComputedRef<boolean>;
    getChoices: () => Promise<void>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updateSchedule: (id: string, values: Record<string, unknown>) => Promise<void>;
}

export const useAdminSchedule = (): UseAdminScheduleInterface => {
    const { loadingState } = usePageLoading();

    const choices = computed(() => {
        return localSchedule.choices;
    });

    const createSchedule = async (values: Record<string, any>) => {
        loadingState.isActive = true;

        values['date_from'] = dayjs(values['date_from']).format('YYYY-MM-DD');
        values['date_to'] = dayjs(values['date_to']).format('YYYY-MM-DD');

        const response = await processor.post(
            'admin/schedule/create',
            values
        );

        if (response.error) {
            localSchedule.formErrors = response.errors;
        } else {
            localSchedule.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    const deleteSchedule = async (values: {
        id: string;
    }) => {
        loadingState.isActive = true;

        const response = await processor.delete(
            `admin/schedule/delete/${values.id}`
        );

        if (response.error) {
            localSchedule.formErrors = response.errors;
        } else {
            localSchedule.formSuccess = true;
        }

        loadingState.isActive = false;

        return response.error;
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

    const formSuccess = computed(() => {
        return localSchedule.formSuccess;
    });

    const getChoices = async () => {
        localSchedule.choices = await processor.get(
            'admin/schedule/choices'
        );
    };

    const getEdit = async (id: string) => {
        loadingState.isActive = true;

        localSchedule.formObj = await processor.get(
            `admin/schedule/edit/${id}`
        );

        localSchedule.formObj.date_from = dayjs(localSchedule.formObj.date_from).format('YYYY/MM/DD');
        localSchedule.formObj.date_to = dayjs(localSchedule.formObj.date_to).format('YYYY/MM/DD');

        loadingState.isActive = false;
    };

    const getSearch = async () => {
        loadingState.isActive = true;

        localSchedule.formArr = await processor.get(
            'admin/schedule/search'
        );

        loadingState.isActive = false;
    };

    const localSchedule = reactive({
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
        },
        formSuccess: false
    });

    const updateSchedule = async (id: string, values: Record<string, any>) => {
        loadingState.isActive = true;

        values['date_from'] = dayjs(values['date_from']).format('YYYY-MM-DD');
        values['date_to'] = dayjs(values['date_to']).format('YYYY-MM-DD');

        const response = await processor.patch(
            `admin/schedule/edit/${id}`,
            values
        );

        if (response.error) {
            localSchedule.formErrors = response.errors;
        } else {
            localSchedule.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    return {
        choices,
        createSchedule,
        deleteSchedule,
        formArr,
        formErrors,
        formObj,
        formSuccess,
        getChoices,
        getEdit,
        getSearch,
        updateSchedule
    };
};