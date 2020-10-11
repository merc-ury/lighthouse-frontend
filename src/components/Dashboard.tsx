import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { UserDataContext } from '../data/UserDataContext';

export const Dashboard: React.FC = () => {
    const user = useContext(UserDataContext)[0];

    const renderPage = (): JSX.Element => {
        if (user.loggedIn)
            return (<Typography>Welcome {user.name}</Typography>);
        else
            return (<Typography>You need to log in!</Typography>);
    };

    return renderPage();
};