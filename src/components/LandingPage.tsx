import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { GoogleAuthBtn } from './GoogleAuthBtn';
import mainLogo from '../assets/lighthouse.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 420
    },
    media: {
        height: 400,
        borderRadius: '50%'
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
                <Typography variant="h6">rest assured, you finally made it.</Typography>
                <GoogleAuthBtn useDefaultBtn={true} />
            </Grid>
        </Box>
    );
};