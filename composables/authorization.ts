interface useAuthorizationInterface {
    logout: () => Promise<void>;
    submitLogin: (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void
    }) => Promise<void>;
}

export const useAuthorization = (): useAuthorizationInterface => {
    const { loadingState } = usePageLoading();

    const logout = async () => {
        loadingState.isActive = true;

        const { signOut } = useAuth();

        await signOut({ callbackUrl: '/admin/auth' });

        loadingState.isActive = false;
    };

    const submitLogin = async (values: Record<string, unknown>, actions: {
        setErrors: (arg0: Record<string, unknown>) => void;
    }) => {
        loadingState.isActive = true;

        const { signIn } = useAuth();

        try {
            await signIn(values, { callbackUrl: '/admin/schedule' });
        } catch {
            actions.setErrors({ username: 'Are you sure?', password: 'I think not...' });
        }

        loadingState.isActive = false;
    }

    return {
        logout,
        submitLogin
    };
};