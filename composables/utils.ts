interface UseUtilsInterface {
    getApiTitle: () => string;
    getApiUrl: () => string;
    getBusinessEmail: () => string;
    getBusinessPhone: (convert: boolean) => string;
    getGuiUrl: () => string;
}

export const useUtils = (): UseUtilsInterface => {
    const runtimeConfig = useRuntimeConfig();

    const getApiTitle = () => {
        return runtimeConfig.public['api_title'];
    }

    const getApiUrl = () => {
        return runtimeConfig.public['api_url'];
    }

    const getBusinessEmail = () => {
        return runtimeConfig.public['business_email'];
    }

    const getBusinessPhone = (convert = false) => {
        if (convert) {
            return runtimeConfig.public['business_phone'].replace(/-/g, '');
        } else {
            return runtimeConfig.public['business_phone'];
        }
    }

    const getGuiUrl = () => {
        return runtimeConfig.public['gui_url'];
    }

    return {
        getApiTitle,
        getApiUrl,
        getBusinessEmail,
        getBusinessPhone,
        getGuiUrl
    };
};