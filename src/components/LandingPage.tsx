import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Card, CardActionArea ,CardMedia } from '@material-ui/core';
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
            <Card className={ classes.root }>
                <CardActionArea>
                    <CardMedia className={ classes.media } image={ mainLogo } />
                </CardActionArea>
            </Card>
        </Container>
    );
};