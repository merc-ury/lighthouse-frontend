import React from 'react';
import { GoogleLoginButton, GoogleLogoutButton } from './GoogleAuthButton';
import { Avatar, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IUserData } from '../data/IUserData';
import theme from '../theme';

const useStyles = makeStyles({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    }
});

interface IProps {
    user: IUserData;
}

export const MenuBar: React.FC<IProps> = (props) => {
    const classes = useStyles();

    const renderMenu = (): JSX.Element => {
        if (props.user.loggedIn)
            return (
                <Badge className={classes.root}>
                    <Avatar alt={props.user.name} src={props.user.imgUrl} />
                    <GoogleLogoutButton useDefaultBtn={false} customText="Logout" customColor="inherit" />
                </Badge> 
            );
        else
            return (
                <Badge>
                    <GoogleLoginButton useDefaultBtn={false} customText="Login" customColor="inherit" />
                </Badge>
            );
    };

    return renderMenu();
}; 