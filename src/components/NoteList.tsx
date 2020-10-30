import React, { useEffect, useState } from 'react';
import { useNotes } from '../hooks/useNotes';
import { INoteData } from '../data/INote';
import { IUserLogin } from '../data/IUserLogin';
import { NoteItem } from './NoteItem';
import { AddNote } from './AddNote';
import { Box, Grid, Container } from '@material-ui/core';

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
            <Container>
                <AddNote />
            </Container>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="flex-start">
                      {
                          notes.map((note, idx) => (<NoteItem key={idx} note={note} />))
                      }
            </Grid>
        </Box>
    );
};