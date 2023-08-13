/**
 * UseClientFraudInterface represents the interface for managing frauds in the Client app.
 *
 * @interface
 */
interface UseClientFraudInterface {
    getFraud: (values: Record<string, string>) => Promise<void>;
}

/**
 * Function to interact with the Client Fraud module.
 * @returns {UseClientFraudInterface} The object with the available functions and data.
 */
export const useClientFraud = (): UseClientFraudInterface => {
    const { loadingState } = usePageLoading();

    const router = useRouter();

    /**
     * Process the given values to check for fraud.
     *
     * @param {Record<string, string>} values - An object containing the values to check for fraud.
     * @returns {Promise<void>} - A promise that resolves when the fraud check is complete.
     *
     * @throws {Error} - If a fraud string is found, the function throws an error and redirects to "/callus".
     */
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