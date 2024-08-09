import { useState } from 'react';

export const useSearch = (
    searchHandler: (value: any) => void,
    findAllHandler: () => void,
    pattern: any,
    message: string,
) => {
    const [filter, setFilter] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<any | []>([]);

    async function handleSearch(event: any) {
        if (event.key !== 'Enter') return;
        setIsLoading(true);
        const value = event.target.value;

        if (!value.length) {
            try {
                const data = await findAllHandler();
                setFilter(false);
                setIsLoading(false);
                setData(data);
                return;
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        }

        if (!pattern.test(value)) {
            alert(message);
            setIsLoading(false);
            return;
        }

        try {
            const data = await searchHandler(value);
            setFilter(true);
            setIsLoading(false);
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    return { handleSearch, filter, isLoading, data };
};
