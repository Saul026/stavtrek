import { apiInstance } from '../base';

const BASE_URL = '/session';

export const login = (email: string, password: string): Promise<any> => {
    const data = {
        email: email,
        password: password,
    };
    const options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    return apiInstance.post(BASE_URL, data, options);
};
