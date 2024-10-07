import {type ComputedRef, type UnwrapNestedRefs} from "vue";

interface UseAdminRegisterInterface {
    formArr: ComputedRef<string[]>;
    formObj: ComputedRef<{
        address: string;
        amount: string;
        city: string;
        class_type: string;
        comment: string;
        coupon_code: string;
        credit_card_number: string;
        dln: string;
        dls: string;
        dob: string;
        email: string;
        first_name: string;
        id: string;
        last_name: string;
        phone: string;
        schedule: string;
        schedule_date: string;
        schedule_day: string;
        state: string;
        xpl: string;
        zipcode: string;
    }>;
    getPrint: (id: string, student: string) => Promise<void>;
    getSearch: (id: string) => Promise<void>;
}

export const useAdminRegister = (): UseAdminRegisterInterface => {
    const formArr = computed(() => {
        return localRegister.formArr;
    });

    const formObj = computed(() => {
        return localRegister.formObj;
    });

    const getPrint = async (id: string, student: string) => {
        const {doProcess, processorObj} = await useProcessor();

        await doProcess(`admin/register/${id}/${student}/print`, 'GET', null);

        localRegister.formObj = processorObj.value;
    };

    const getSearch = async (id: string) => {
        const {doProcess, processorArr} = await useProcessor();

        await doProcess(`admin/register/${id}/search`, 'GET', null);

        localRegister.formArr = processorArr.value;
    };

    const localRegister: UnwrapNestedRefs<any> = reactive({
        formArr: [],
        formObj: {
            address: '',
            amount: '',
            city: '',
            class_type: '',
            comment: '',
            coupon_code: '',
            credit_card_number: '',
            dln: '',
            dls: '',
            dob: '',
            email: '',
            first_name: '',
            id: '',
            last_name: '',
            phone: '',
            schedule: '',
            schedule_date: '',
            schedule_day: '',
            state: '',
            xpl: '',
            zipcode: ''
        }
    });

    return {
        formArr,
        formObj,
        getPrint,
        getSearch
    };
};