import React from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import theme from '../theme';

const useStyles = makeStyles({
    root: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(3)
    },
    input: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    icon: {
        padding: 10
    }
});

export const AddNote: React.FC = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root} component="form">
            <NoteIcon className={classes.icon} />
            <InputBase className={classes.input} placeholder="Write a note..." multiline />
            <IconButton>
                <ExpandMoreOutlinedIcon />
            </IconButton>
        </Paper>
    );
};