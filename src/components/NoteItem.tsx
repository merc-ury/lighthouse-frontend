import React from 'react';
import { INoteData } from '../data/INote';
import { Card } from '@material-ui/core';

interface IProps {
    note: INoteData;
}

export const NoteItem: React.FC<IProps> = (props) => {
    return (
        <Card>
            {props.note.title}
            <br />
            {props.note.content}
        </Card>
    );
};