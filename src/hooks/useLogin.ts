import Axios, { AxiosRequestConfig } from 'axios';
import { IUser, IUserData } from '../data/IUser';

const config: AxiosRequestConfig = {
    httpAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
};

type LoginFC = () => {
    addUser: (user: IUserData) => Promise<IUserData>;
};

export const useLogin: LoginFC = () => {
    // TODO: replace localhost with actual endpoints
    const baseUrl: string = 'https://localhost:5001';

    const addUser = async (user: IUserData) => {
        const response = await Axios.post<IUser>(`${baseUrl}/api/user/add`, user, config);
        return response.data.data as IUserData;
    };

    return {
        addUser
    }
};