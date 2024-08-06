import { apiInstance } from '../base';

import { Device } from './types';

const BASE_URL = '/devices';

export const getDevices = (): Promise<Device[]> => {
    return apiInstance.get(`${BASE_URL}`);
};

export const getDeviceById = (id: number): Promise<Device[]> => {
    return apiInstance.get(`${BASE_URL}?id=${id}`);
};

export const createDevice = (data: any): Promise<void> => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return apiInstance.post(BASE_URL, data, options);
};

export const deleteDevice = (id: number): Promise<void> => {
    return apiInstance.delete(`${BASE_URL}/${id}`);
};
