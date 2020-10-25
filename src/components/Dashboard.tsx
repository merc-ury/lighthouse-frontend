import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { UserDataContext } from '../data/UserDataContext';
import { NoteList } from './NoteList';

export const Dashboard: React.FC = () => {
    const user = useContext(UserDataContext)[0];
    const [count, setCount] = useState<number>(3);

    useEffect(() => {
        if (!count || user.loggedIn) // exits if count == 0 or user.loggedIn == true
            return;

        const timer = setTimeout(() => {
            console.log('Timer Activated: ' + count);
            setCount(count => count - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]);

    const renderPage = (): JSX.Element => {
        // TODO: display NoteList component if user is successfully logged in; display ErrorPage if error occurs
        if (user.loggedIn)
            return (<NoteList user={user} />);
        else
            return !count ? (<Redirect to="/" />) : (<Typography>You need to log in first! Redirecting...</Typography>);
    };

    return renderPage();
};