import React, { useEffect, useState, useContext } from 'react';
import { useNotes } from '../hooks/useNotes';
import { INoteData } from '../data/INote';
import { IUserLogin } from '../data/IUserLogin';
import { UserLoginContext } from '../data/UserLoginContext';
import { Box, Typography } from '@material-ui/core';

interface IProps {
    user: IUserLogin;
}

export const NoteList: React.FC<IProps> = (props) => {
    const user = useContext(UserLoginContext)[0];
    const service = useNotes();
    const [notes, setNotes] = useState<INoteData[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await service.getNotes(user.userID);
            
            setNotes(response.data as INoteData[]);
        };

        getData();
    }, []);

    return (
        <Box>
            {
                notes.map(note => {
                    return (<Typography>{note.title}</Typography>)
                })
            }
        </Box>
    );
};