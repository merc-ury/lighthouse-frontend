import React from 'react';
import { IUserData } from '../data/IUserData';
import { Typography } from '@material-ui/core';

interface IProps {
    user: IUserData;
}

export const NoteList: React.FC<IProps> = (props) => {
    return (
        <Typography>Welcome {props.user.name}!</Typography>
    );
};