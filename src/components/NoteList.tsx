import React, { useEffect, useState, useContext } from 'react';
import { useNotes } from '../hooks/useNotes';
import { INoteData } from '../data/INote';
import { IUserLogin } from '../data/IUserLogin';
import { NoteItem } from './NoteItem';
import { AddNote } from './AddNote';
import { NoteIDContext } from '../data/NoteIDContext';
import { Box, Grid, Container } from '@material-ui/core';

interface IProps {
    user: IUserLogin;
}

export const NoteList: React.FC<IProps> = (props) => {
    const service = useNotes();
    const [currentNoteID, setCurrentNoteID] = useContext(NoteIDContext);
    const [notes, setNotes] = useState<INoteData[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await service.getNotes(props.user.userID);
            const countResponse = await service.getCount();

            const noteData = response.data as INoteData[];
            const count = countResponse.data as number;

            setNotes(noteData);
            setCurrentNoteID(count);
        };

        getData();
    }, [currentNoteID]);

    return (
        <Box>
            <Container>
                <AddNote userID={props.user.userID}/>
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