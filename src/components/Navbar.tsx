import React, { useContext } from 'react';
import { UserDataContext } from '../data/UserDataContext';
import { GoogleLoginButton, GoogleLogoutButton } from './GoogleAuthButton';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
});

export const Navbar: React.FC = () => {
    const classes = useStyles();
    const user = useContext(UserDataContext)[0];

    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={ classes.title } variant="h6">Lighthouse Notes</Typography>
                    {
                        user.loggedIn ? <GoogleLogoutButton useDefaultBtn={false} customText="Logout" customColor="inherit" /> 
                                      : <GoogleLoginButton useDefaultBtn={false} customText="Login" customColor="inherit" />
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};