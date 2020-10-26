import Axios, { AxiosRequestConfig } from 'axios';
import { IUser, IUserData } from '../data/IUser';

const config: AxiosRequestConfig = {
    httpAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
};

export const useLogin = () => {
    // TODO: replace localhost with actual endpoints
    const baseUrl: string = 'https://localhost:5001';

    const getUsers = async () => {
        const response = await Axios.get<IUser>(`${baseUrl}/api/user/get/all`, config);
        return response.data;
    };

    const addUser = async (user: IUserData) => {
        
    };

    return {
        addUser
    }
};