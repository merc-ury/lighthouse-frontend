import React from 'react';
import Axios, { AxiosRequestConfig } from 'axios';

// TODO: replace localhost with actual endpoints
// TODO: fix SSL certificates

const config: AxiosRequestConfig = {
    httpAgent: 'example'
};

export const useService = () => {
    const baseUrl: string = 'https://localhost:5001';

    const getNotes = async (userID: number) => {
        const response = await Axios.get(`${baseUrl}/api/note/get/${userID}/all`, config);
        return response.data;
    };

    return {
        getNotes
    };
};