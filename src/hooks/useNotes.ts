import Axios, { AxiosRequestConfig } from 'axios';
import { INote } from '../data/INote';
import { INoteData } from '../data/INote';

// TODO: fix SSL certificates

// We may need to adjust configuration for sending requests; for now we can just have the httpAgent set
const config: AxiosRequestConfig = {
    httpAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
};

type NoteFC = () => {
    getNotes: (userID: number) => Promise<INote>;
    getNoteByID: (noteID: number) => Promise<INote>;
    addNote: (note: INoteData) => Promise<INote>;
    updateNote: (note: INoteData) => Promise<INote>;
    deleteNote: (noteID: number) => Promise<INote>;
}

export const useNotes: NoteFC = () => {
    // TODO: replace localhost with actual endpoints
    const baseUrl: string = 'https://localhost:5001';

    const getNotes = async (userID: number) => {
        const response = await Axios.get<INote>(`${baseUrl}/api/note/get/${userID}/all`, config);
        return response.data;
    };

    const getNoteByID = async (noteID: number) => {
        const response = await Axios.get<INote>(`${baseUrl}/api/note/get/${noteID}`, config);
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

    const deleteNote = async (noteID: number) => {
        const response = await Axios.delete<INote>(`${baseUrl}/api/note/delete/${noteID}`, config);
        return response.data;
    };

    return {
        getNotes,
        getNoteByID,
        addNote,
        updateNote,
        deleteNote
    };
};