import React from 'react';
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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};