import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNotes } from '../hooks/useNotes';
import { NoteIDContext } from '../data/NoteIDContext';
import { Toast } from './Toast';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import theme from '../theme';

interface IProps {
    userID: number;
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(3),
    },
    input: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    icon: {
        padding: 10
    }
});

export const AddNote: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const service = useNotes();
    const [currentNoteID, setCurrentNoteID] = useContext(NoteIDContext);
    const [content, setContent] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [toastMsg, setToastMsg] = useState<string>('');

    const updateNoteContent = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        const res = await service.addNote({
            userID: props.userID,
            noteID: currentNoteID + 1,
            title: 'Default Title',
            content: content,
            category: 0,
            priority: 0,
            createdOn: new Date()
        });

        if (res.success) {
            setCurrentNoteID(currentNoteID + 1);
            setToastMsg('Successfully added!');
            setOpen(true);
        } else {
            setToastMsg('There was an error adding your note: ' + res.message);
        }
    };

    const handleCloseToast = () => {
        setOpen(false);
    };
    
    return (
        <React.Fragment>
            <Paper className={classes.root} component="form" onSubmit={handleSubmit}>
                <NoteIcon className={classes.icon} />
                <InputBase className={classes.input} placeholder="Write a note..." onChange={updateNoteContent} />
                <IconButton>
                    <ExpandMoreOutlinedIcon />
                </IconButton>
            </Paper>
            { open ? <Toast message={toastMsg} 
                            open={open} 
                            handleClose={handleCloseToast} /> 
                   : <div></div> }
        </React.Fragment>
    );
};