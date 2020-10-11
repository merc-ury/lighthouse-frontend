import React, { useContext } from 'react';
import { UserDataContext } from '../data/UserDataContext';
import { MenuBar } from './MenuBar';
import { Link } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { AboutPage } from './AboutPage';
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
    const user = useContext(UserDataContext)[0];

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">Lighthouse Notes</Typography>
                    <Button component={Link} to={"/dashboard"} color="inherit">
                        Dashboard
                    </Button>
                    <Button component={Link} to={"/about"} color="inherit">
                        About
                    </Button>
                    <MenuBar user={user} />
                </Toolbar>
            </AppBar>
        </div>
    );
};