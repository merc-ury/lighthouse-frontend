import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import mainLogo from '../assets/lighthouse.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 420
    },
    media: {
        height: 500
    }
});

export const LandingPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Container>
            <Button fullWidth>Test</Button>
        </Container>
    );
};