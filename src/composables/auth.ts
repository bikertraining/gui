import { processor, session, usePageLoading } from "@/composables";
import { computed, ComputedRef, reactive } from "vue";

interface UseAuthInterface {
    formErrors: ComputedRef<string>;
    formSuccess: ComputedRef<boolean>;
    globalAuth: {
        token: string;
    };
    initialize: () => void;
    login: (values: {
        username: string;
        password: string;
    }) => void;
    nonFieldFormError: ComputedRef<boolean>;
    nonFieldFormMessage: ComputedRef<string>;
    removeToken: () => void;
}

const globalAuth = reactive({
    token: ''
});

const tokenStorageKey = 'TOKEN_STORAGE_KEY';

export const useAuth = (): UseAuthInterface => {
    const { loadingState } = usePageLoading();

    const formErrors = computed(() => {
        return localAuth.formErrors;
    });

    const formSuccess = computed(() => {
        return localAuth.formSuccess;
    });

    const initialize = () => {
        const token = localStorage.getItem(tokenStorageKey);

        if (token) {
            localStorage.setItem(tokenStorageKey, token);

            session.defaults.headers.common['Authorization'] = `Token ${token}`;

            globalAuth.token = token;
        }
    };

    const localAuth = reactive({
        formErrors: '',
        formSuccess: false,
        nonFieldFormError: false,
        nonFieldFormMessage: ''
    });

    const login = async (values: {
        username: string;
        password: string;
    }) => {
        loadingState.isActive = true;

        const response = await processor.post(
            'dj-rest-auth/login/',
            values
        );

        if (response.error) {
            if ('non_field_errors' in response.errors) {
                localAuth.nonFieldFormError = true;
                localAuth.nonFieldFormMessage = response.errors['non_field_errors'][0];
            } else {
                localAuth.formErrors = response.errors;
            }
        } else {
            localStorage.setItem(tokenStorageKey, response.key);

            session.defaults.headers.common['Authorization'] = `Token ${response.key}`;

            globalAuth.token = response.key;

            localAuth.formSuccess = true;
        }

        loadingState.isActive = false;
    };

    const nonFieldFormError = computed(() => {
        return localAuth.nonFieldFormError;
    });

    const nonFieldFormMessage = computed(() => {
        return localAuth.nonFieldFormMessage;
    });

    const removeToken = async () => {
        localStorage.removeItem(tokenStorageKey);

        delete session.defaults.headers.common['Authorization'];

        globalAuth.token = '';

        await processor.post(
            'dj-rest-auth/logout/',
            {}
        );
    };

    return {
        formErrors,
        formSuccess,
        globalAuth,
        initialize,
        login,
        nonFieldFormError,
        nonFieldFormMessage,
        removeToken
    };
};