import React, { useEffect, useState, useContext } from 'react';
import { useNotes } from '../hooks/useNotes';
import { IUserLogin } from '../data/IUserLogin';
import { Typography } from '@material-ui/core';
import { UserLoginContext } from '../data/UserLoginContext';

interface IProps {
    user: IUserLogin;
}

export const NoteList: React.FC<IProps> = (props) => {
    const service = useNotes();
    const [text, setText] = useState<string>('');
    const user = useContext(UserLoginContext)[0];

    useEffect(() => {
        const getData = async () => {
            
        };

        getData();
    }, []);

    return (
        <div>
            <Typography>Welcome {props.user.name}!</Typography>
            <Typography>{text}</Typography>
        </div>
    );
};