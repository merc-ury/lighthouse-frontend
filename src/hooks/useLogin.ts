import Axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    httpAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
};

export const useLogin = () => {
    // TODO: replace localhost with actual endpoints
    const baseUrl: string = 'https://localhost:5001';

    const addUser = async (user: string) => {

    };
};