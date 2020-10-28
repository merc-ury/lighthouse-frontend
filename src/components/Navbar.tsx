import React, { useContext } from 'react';
import { UserLoginContext } from '../data/UserLoginContext';
import { MenuBar } from './MenuBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Box, Toolbar, Typography } from '@material-ui/core';
import theme from '../theme';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        display: 'inline',
        margin: theme.spacing(2)
    },
    menuBar: {
        flexGrow: 1
    }
});

export const Navbar: React.FC = () => {
    const classes = useStyles();
    const user = useContext(UserLoginContext)[0];

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">Lighthouse Notes</Typography>
                    <Box className={classes.menuBar}>
                        <Button component={Link} to={"/dashboard"} color="inherit">
                            Dashboard
                        </Button>
                        <Button component={Link} to={"/about"} color="inherit">
                            About
                        </Button>
                    </Box>
                    <MenuBar user={user} />
                </Toolbar>
            </AppBar>
        </div>
    );
};