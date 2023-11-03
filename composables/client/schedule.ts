import { type ComputedRef, type UnwrapNestedRefs } from "vue";

interface UseClientScheduleInterface {
    formArr: ComputedRef<string[]>;
    getSearch: (class_type: string | string[]) => Promise<void>;
    utilClassDate: (date_from: string, date_to: string) => string;
}

export const useClientSchedule = (): UseClientScheduleInterface => {
    const formArr = computed(() => {
        return localSchedule.formArr;
    });

    const getSearch = async (class_type: string | string[]) => {
        const { doProcess, processorArr } = await useProcessor();

        if (class_type === '3wbrc') {
            await doProcess('client/schedule/search/3wbrc/type', 'GET', null);
        } else if (class_type === 'brc') {
            await doProcess('client/schedule/search/brc/type', 'GET', null);
        } else if (class_type === 'src') {
            await doProcess('client/schedule/search/src/type', 'GET', null);
        } else {
            await doProcess('client/schedule/search', 'GET', null);
        }

        localSchedule.formArr = processorArr.value;
    };

    const localSchedule: UnwrapNestedRefs<any> = reactive({
        formArr: []
    });

    const utilClassDate = (date_from: string, date_to: string) => {
        const dayjs = useDayjs();

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
        formArr,
        getSearch,
        utilClassDate
    };
};