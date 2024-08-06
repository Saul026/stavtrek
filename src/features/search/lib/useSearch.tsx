import { useState } from 'react';

export const useSearch = (searchHandler: (value: any) => void, emptyHandler: () => void, pattern: any, message: string) => {
    const [filter, setFilter] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<any | []>([]);

    async function handleSearch(event: any) {
        if (event.key !== 'Enter') return;
        setIsLoading(true);
        const value = event.target.value;

        if (!value.length) {
            setFilter(false);
            const data = await emptyHandler();
            setIsLoading(false);
            setData(data);
            return;
        }

        if (!pattern.test(value)) {
            alert(message);
            setIsLoading(false);
            return;
        }

        setFilter(true);
        const data = await searchHandler(value);
        setIsLoading(false);
        setData(data);
   
    }

    return { handleSearch, filter, isLoading, data };
};
