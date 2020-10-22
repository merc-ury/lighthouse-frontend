import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { UserDataContext } from '../data/UserDataContext';

export const Dashboard: React.FC = () => {
    const user = useContext(UserDataContext)[0];
    const [count, setCount] = useState<number>(3);
    const [text, setText] = useState<string>(`You need to log in first! Redirecting you in ${count}...`);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('TIMER IS ACTIVATED...?');
            setText(`You need to log in first! Redirecting you in ${count}...`);
            setCount(count - 1);
        }, 1000);

        return () => clearTimeout(timer);
    });

    const renderPage = (): JSX.Element => {
        if (user.loggedIn)
            return (<Typography>Welcome {user.name}</Typography>);
        else {
            return count === 0 ? (<Redirect to="/" />) : (<Typography>{text}</Typography>);
        }
    };

    return renderPage();
};