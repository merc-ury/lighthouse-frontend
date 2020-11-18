import React, { useState, ChangeEvent } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNotes } from '../hooks/useNotes';
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
    const [content, setContent] = useState<string>('');

    const updateNoteContent = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value);
        console.log(content);
    };
    
    return (
        <Paper className={classes.root} component="form">
            <NoteIcon className={classes.icon} />
            <InputBase className={classes.input} placeholder="Write a note..." onChange={updateNoteContent} />
            <IconButton>
                <ExpandMoreOutlinedIcon />
            </IconButton>
        </Paper>
    );
};