import { useCallback, useState} from "react";

const useInput = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, transformData) => {
        setIsLoading(true);
        setError(null);
        try {
            debugger
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? requestConfig.body : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            const dataFinal = { 'data' : data, 'text': requestConfig.enteredText ? requestConfig.enteredText : '' }
            transformData(dataFinal);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, sendRequest };
}

export default useInput;
