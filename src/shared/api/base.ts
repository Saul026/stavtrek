import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const API_URL = '/api';

class ApiInstance {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: API_URL,
            timeout: 120000,
        });
    }

    async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
        const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
        return response.data;
    }

    async post<T>(endpoint: string, data: any, options: AxiosRequestConfig = {}): Promise<T> {
        const response: AxiosResponse<T> = await this.axios.post(endpoint, data, options);
        return response.data;
    }

    async delete<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
        const response: AxiosResponse<T> = await this.axios.delete(endpoint, options);
        return response.data;
    }
}

export const apiInstance = new ApiInstance();
