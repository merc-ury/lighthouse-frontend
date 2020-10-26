import React, { useEffect, useState } from 'react';
import { useService } from '../hooks/useService';
import { IUserData } from '../data/IUserData';
import { Typography } from '@material-ui/core';

interface IProps {
    user: IUserData;
}

export const NoteList: React.FC<IProps> = (props) => {
    const service = useService();
    const [text, setText] = useState<string>('bitch');

    useEffect(() => {
        const getData = async () => {
            const response = await service.getNotes(0);
            console.log(response.data[0].title);
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