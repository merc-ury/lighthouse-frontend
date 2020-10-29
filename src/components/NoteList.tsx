import React, { useEffect, useState, useContext } from 'react';
import { useNotes } from '../hooks/useNotes';
import { INoteData } from '../data/INote';
import { IUserLogin } from '../data/IUserLogin';
import { NoteItem } from './NoteItem';
import { Box, GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import theme from '../theme';

interface IProps {
    user: IUserLogin;
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        overflow: 'hidden',
        margin: theme.spacing(2),
        // borderStyle: 'solid'
    },
    gridList: {
        width: 'auto',
        height: 'auto'
    }
});

export const NoteList: React.FC<IProps> = (props) => {
    const service = useNotes();
    const [notes, setNotes] = useState<INoteData[]>([]);
    const classes = useStyles();

    useEffect(() => {
        const getData = async () => {
            const response = await service.getNotes(props.user.userID);
            
            setNotes(response.data as INoteData[]);
        };

        getData();
    }, []);

    return (
        <Box className={classes.root}>
            <GridList className={classes.gridList} cols={5}>
                {
                    notes.map((note, idx) => (
                        <GridListTile key={idx} cols={1}>
                            <NoteItem note={note}/>
                        </GridListTile>
                    ))
                }
            </GridList>
        </Box>
    );
};