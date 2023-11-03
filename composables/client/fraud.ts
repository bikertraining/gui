interface UseClientFraudInterface {
    getFraud: (values: Record<string, string>) => Promise<void>;
}

export const useClientFraud = (): UseClientFraudInterface => {
    const { loadingState } = usePageLoading();

    const router = useRouter();

    const getFraud = async (values: Record<string, string>): Promise<void> => {
        const { doProcess, processorObj } = await useProcessor();

        // Check in this specific order
        const fraud_strings = {
            'ipaddress': values['ipaddress'],
            'credit_card': values['credit_card_number'],
            'phone': values['phone'].replace(/[^0-9]/g, ''),
            'email': values['email'],
            'address': values['address']
        };

        for (let [key, value] of Object.entries(fraud_strings)) {
            await doProcess(`client/fraud/${value}/search/${key}`, 'GET', null);

            // Fraud string found, redirect and stop processing
            if (processorObj.value['status']) {
                loadingState.isActive = false;

                throw await router.push('/callus');
            }
        }
    };

    return {
        getFraud
    };
};