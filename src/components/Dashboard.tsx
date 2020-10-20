import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { UserDataContext } from '../data/UserDataContext';

export const Dashboard: React.FC = () => {
    const user = useContext(UserDataContext)[0];
    const history = useHistory();
    const [text, setText] = useState<string>('You need to log in first! Redirecting you in 3...');

    const renderPage = (): JSX.Element => {
        if (user.loggedIn)
            return (<Typography>Welcome {user.name}</Typography>);
        else {
            redirectToHome();
            return (<Typography>{text}</Typography>);
        }
    };

    const redirectToHome = (): void => {
        
    };

    return renderPage();
};