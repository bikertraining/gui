import { processor, usePageLoading } from "@/composables";
import dayjs from "dayjs";
import { computed, ComputedRef, reactive } from "vue";

interface UseAdminCoachInterface {
    createCoach: (values: Record<string, unknown>) => Promise<void>;
    deleteCoach: (values: {
        id: string;
    }) => Promise<void>;
    formArr: ComputedRef<string[]>;
    formErrors: ComputedRef<Record<string, unknown>>;
    formObj: ComputedRef<{
        address: string;
        city: string;
        date_to: string;
        email: string;
        msf_id: string;
        name: string;
        phone: string;
        state: string;
        zipcode: string;
    }>;
    formSuccess: ComputedRef<boolean>;
    getEdit: (id: string) => Promise<void>;
    getSearch: () => Promise<void>;
    updateCoach: (id: string, values: Record<string, unknown>) => Promise<void>;
}

export const useAdminCoach = (): UseAdminCoachInterface => {
    const { loadingState } = usePageLoading();

    const createCoach = async (values: Record<string, any>) => {
        loadingState.isActive = true;

        values['date_to'] = dayjs(values['date_to']).format('YYYY-MM-DD');

        const response = await processor.post(
            'admin/coach/create',
            values
        );

        if (response.error) {
            localCoach.formErrors = response.errors;
        } else {
            localCoach.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    const deleteCoach = async (values: {
        id: string;
    }) => {
        loadingState.isActive = true;

        const response = await processor.delete(
            `admin/coach/delete/${values.id}`
        );

        if (response.error) {
            localCoach.formErrors = response.errors;
        } else {
            localCoach.formSuccess = true;
        }

        loadingState.isActive = false;

        return response.error;
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

    const formSuccess = computed(() => {
        return localCoach.formSuccess;
    });

    const getEdit = async (id: string) => {
        loadingState.isActive = true;

        localCoach.formObj = await processor.get(
            `admin/coach/edit/${id}`
        );

        localCoach.formObj.date_to = dayjs(localCoach.formObj.date_to).format('YYYY/MM/DD');

        loadingState.isActive = false;
    };

    const getSearch = async () => {
        loadingState.isActive = true;

        localCoach.formArr = await processor.get(
            'admin/coach/search'
        );

        loadingState.isActive = false;
    };

    const localCoach = reactive({
        formArr: [],
        formErrors: {},
        formObj: {
            address: '',
            city: '',
            date_to: '',
            email: '',
            msf_id: '',
            name: '',
            phone: '',
            state: '',
            zipcode: ''
        },
        formSuccess: false
    });

    const updateCoach = async (id: string, values: Record<string, any>) => {
        loadingState.isActive = true;

        values['date_to'] = dayjs(values['date_to']).format('YYYY-MM-DD');

        const response = await processor.patch(
            `admin/coach/edit/${id}`,
            values
        );

        if (response.error) {
            localCoach.formErrors = response.errors;
        } else {
            localCoach.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    return {
        createCoach,
        deleteCoach,
        formArr,
        formErrors,
        formObj,
        formSuccess,
        getEdit,
        getSearch,
        updateCoach
    };
};