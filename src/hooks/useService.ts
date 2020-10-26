import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { INote } from '../data/INote';

// TODO: replace localhost with actual endpoints
// TODO: fix SSL certificates

const config: AxiosRequestConfig = {
    httpAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
};

export const useService = () => {
    const baseUrl: string = 'https://localhost:5001';

    const getNotes = async (userID: number) => {
        const response = await Axios.get<INote>(`${baseUrl}/api/note/get/${userID}/all`, config);
        return response.data;
    };

    return {
        getNotes
    };
};