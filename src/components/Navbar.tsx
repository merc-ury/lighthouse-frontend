import React from 'react';
import { GoogleAuthBtn } from './GoogleAuthBtn';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

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

    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={ classes.title } variant="h6">Lighthouse Notes</Typography>
                    <GoogleAuthBtn useDefaultBtn={false} customText="Login" customColor="inherit" />
                </Toolbar>
            </AppBar>
        </div>
    );
};