import React, { useContext } from 'react';
import { UserLoginContext } from '../data/UserLoginContext';
import { Button } from '@material-ui/core';
import { GoogleLoginResponse, GoogleLoginResponseOffline,useGoogleLogin, useGoogleLogout, GoogleLogin, GoogleLogout } from 'react-google-login';

interface IProps {
    useDefaultBtn: boolean;
    customText?: string;
    customVariant?: "text" | "outlined" | "contained" | undefined;
    customColor?: "inherit" | "primary" | "secondary" | "default" | undefined;
}

// TODO: move clientID to dotenv file
const clientID: string = "393002801221-om8rvfesgm1vjf5sienfif6v126a3b06.apps.googleusercontent.com";

export const GoogleLoginButton: React.FC<IProps> = (props) => {
    const setUser = useContext(UserLoginContext)[1];

    const isGoogleLoginResponse = (arg: any): arg is GoogleLoginResponse => {
        return (arg as GoogleLoginResponse).profileObj !== undefined;
    };

    const handleSuccessResponse = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if (isGoogleLoginResponse(response)) {
            // TODO: send data back to backend
            console.log('ACCESS TOKEN: ' + response.accessToken);
            console.log(response.profileObj);

            setUser({
                googleId: response.profileObj.googleId,
                name: response.profileObj.name,
                email: response.profileObj.email,
                imgUrl: response.profileObj.imageUrl,
                accessToken: response.accessToken,
                loggedIn: true
            });
        }
    };

    const handleFailureResponse = (err: any) => {
        console.log(err);
    };

    const google = useGoogleLogin({
        clientId: clientID,
        onSuccess: handleSuccessResponse,
        onFailure: handleFailureResponse,
        cookiePolicy: 'single_host_origin',
        isSignedIn: true
    });

    const renderButton = (): JSX.Element => {
        if (props.useDefaultBtn)
            return (
                <GoogleLogin clientId={clientID}
                             onSuccess={handleSuccessResponse}
                             onFailure={handleFailureResponse}
                             cookiePolicy='single_host_origin'
                             isSignedIn={true} />
            );
        else
            return (
                <Button variant={props.customVariant}
                        color={props.customColor} 
                        onClick={google.signIn}>
                    {props.customText}
                </Button>
            );
    };

    return renderButton();
};

export const GoogleLogoutButton: React.FC<IProps> = (props) => {
    const setUser = useContext(UserLoginContext)[1];

    const handleLogoutResponse = () => {
        console.log('Logged out successfully');
        setUser({
            loggedIn: false
        });
    };

    const handleFailureResponse = () => {
        console.log('An error has occured');
    };

    const google = useGoogleLogout({
        clientId: clientID,
        onLogoutSuccess: handleLogoutResponse,
        onFailure: handleFailureResponse,
    });

    const renderButton = (): JSX.Element => {
        if (props.useDefaultBtn)
            return (
                <GoogleLogout clientId={clientID}
                              onLogoutSuccess={handleLogoutResponse}
                              onFailure={handleFailureResponse} />
            );
        else
            return (
                <Button variant={props.customVariant}
                        color={props.customColor}
                        onClick={google.signOut}>
                    {props.customText}
                </Button>
            );
    };

    return renderButton();
};