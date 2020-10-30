import React from 'react';
import { INoteData } from '../data/INote';
import { Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ColorLensOutlined from '@material-ui/icons/ColorLensOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import theme from '../theme';

interface IProps {
    note: INoteData;
}

const useStyles = makeStyles({
    root: {
        width: '20%',
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '100%',
        margin: theme.spacing(5)
    },
    actionArea: {
        justifyContent: 'center'
    }
});

export const NoteItem: React.FC<IProps> = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5">{props.note.title}</Typography>
                <Typography>{props.note.content}</Typography>
            </CardContent>
            <CardActions className={classes.actionArea}>
                <IconButton>
                    <ColorLensOutlined />
                </IconButton>
                <IconButton>
                    <EditOutlined />
                </IconButton>
                <IconButton>
                    <DeleteOutlined />
                </IconButton>
            </CardActions>
        </Card>
    );
};