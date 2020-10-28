import React, { useEffect, useState, useContext } from 'react';
import { useNotes } from '../hooks/useNotes';
import { INoteData } from '../data/INote';
import { IUserLogin } from '../data/IUserLogin';
import { NoteItem } from './NoteItem';
import { Box } from '@material-ui/core';

interface IProps {
    user: IUserLogin;
}

export const NoteList: React.FC<IProps> = (props) => {
    const service = useNotes();
    const [notes, setNotes] = useState<INoteData[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await service.getNotes(props.user.userID);
            
            setNotes(response.data as INoteData[]);
        };

        getData();
    }, []);

    return (
        <Box>
            {
                notes.map(note => (<NoteItem key={note.noteID} note={note} />))
            }
        </Box>
    );
};