import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { INote } from '../data/INote';
import { INoteData } from '../data/INoteData';

// TODO: fix SSL certificates

const config: AxiosRequestConfig = {
    httpAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
};

export const useNotes = () => {
    // TODO: replace localhost with actual endpoints
    const baseUrl: string = 'https://localhost:5001';

    const getNotes = async (userId: number) => {
        const response = await Axios.get<INote>(`${baseUrl}/api/note/get/${userId}/all`, config);
        return response.data;
    };

    const getNoteById = async (noteId: number) => {
        const response = await Axios.get<INote>(`${baseUrl}/api/note/get/${noteId}`, config);
        return response.data;
    };

    const addNote = async (note: INoteData) => {
        const response = await Axios.post<INote>(`${baseUrl}/api/note/add`, note, config);
        return response.data;
    };

    const updateNote = async (note: INoteData) => {
        const response = await Axios.put<INote>(`${baseUrl}/api/note/update`, note, config);
        return response.data;
    };

    const deleteNote = async (noteId: number) => {
        const response = await Axios.delete<INote>(`${baseUrl}/api/note/delete/${noteId}`, config);
        return response.data;
    };

    return {
        getNotes,
        getNoteById,
        addNote,
        updateNote,
        deleteNote
    };
};