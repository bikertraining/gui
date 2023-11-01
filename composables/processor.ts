import { computed, type ComputedRef, reactive, type UnwrapNestedRefs } from "vue";

interface UseProcessorInterface {
    doProcess: (url: string, method: "DELETE" | "GET" | "PATCH" | "POST" | "PUT", values: any) => Promise<void>;
    processorArr: ComputedRef<string[]>;
    processorErrors: ComputedRef<Record<string, any>>;
    processorObj: ComputedRef<Record<string, any>>;
    processorSuccess: ComputedRef<boolean>;
}

export const useProcessor = async (): Promise<UseProcessorInterface> => {
    const processorArr = computed(() => {
        return localProcessor.processorArr;
    });

    const processorErrors = computed(() => {
        return localProcessor.processorErrors;
    });

    const processorObj = computed(() => {
        return localProcessor.processorObj;
    });

    const processorSuccess = computed(() => {
        return localProcessor.processorSuccess;
    });
    const doProcess = async (url: string, method: "DELETE" | "GET" | "PATCH" | "POST" | "PUT", values = {}) => {
        const runtimeConfig = useRuntimeConfig();

        await useFetch(url, {
            onRequest({ options }) {
                // Set the request headers
                options.headers = {
                    'Authorization': <string>useAuth().token.value
                }
            },
            onRequestError({ request }) {
                if (request) {
                    // Timeout
                    localProcessor.processorSuccess = false;

                    throw showError({ fatal: true, statusCode: 408, statusMessage: 'Timeout' });
                }
            },
            onResponse({ response }) {
                if (response.status === 200) {
                    // Get Success
                    localProcessor.processorSuccess = true;

                    if (Array.isArray(response._data)) {
                        localProcessor.processorArr = response._data;
                    } else {
                        localProcessor.processorObj = response._data;
                    }
                } else if (response.status === 201) {
                    // Post Success
                    localProcessor.processorSuccess = true;
                } else if (response.status === 204) {
                    // Patch Success
                    localProcessor.processorSuccess = true;
                } else if (response.status === 400) {
                    // Bad request
                    localProcessor.processorSuccess = false;
                } else if (response.status === 403) {
                    // Permission denied
                    localProcessor.processorSuccess = false;

                    throw showError({ fatal: true, statusCode: 403, statusMessage: 'Permission Denied' });
                } else if (response.status === 404) {
                    // Page not found
                    localProcessor.processorSuccess = false;

                    throw showError({ fatal: true, statusCode: 404, statusMessage: 'Page Not Found' });
                } else if (response.status === 500) {
                    // Internal server error
                    localProcessor.processorSuccess = false;

                    throw showError({ fatal: true, statusCode: 500, statusMessage: 'Internal Server Error' });
                }
            },
            onResponseError({ response }) {
                localProcessor.processorErrors = response._data;
            },
            baseURL: runtimeConfig['public']['api_url'],
            body: values,
            method: method
        });
    };

    const localProcessor: UnwrapNestedRefs<any> = reactive({
        processorErrors: {},
        processorSuccess: false
    });

    return {
        doProcess,
        processorArr,
        processorErrors,
        processorObj,
        processorSuccess
    };
};