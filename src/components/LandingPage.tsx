import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Button, Typography } from '@material-ui/core';
import mainLogo from '../assets/lighthouse.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 420
    },
    media: {
        height: 400
    }
});

export const LandingPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Box>
            <Grid container 
                  direction="column"
                  justify="center"
                  alignItems="center">
                <br />
                <img className={classes.media} src={mainLogo} alt="lighthouse"/>
                <Typography variant="h6">A light can be seen from the horizon...</Typography>
                <Button variant="contained">Click here to sign up</Button>
            </Grid>
        </Box>
    );
};