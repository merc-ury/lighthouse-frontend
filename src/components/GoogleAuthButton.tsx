import React from 'react';
import { Button } from '@material-ui/core';
import { GoogleLoginResponse, GoogleLoginResponseOffline,useGoogleLogin, useGoogleLogout, GoogleLogin, GoogleLogout } from 'react-google-login';

interface IProps {
    useDefaultBtn: boolean;
    customText?: string;
    customVariant?: "text" | "outlined" | "contained" | undefined;
    customColor?: "inherit" | "primary" | "secondary" | "default" | undefined
}

const clientID: string = "393002801221-om8rvfesgm1vjf5sienfif6v126a3b06.apps.googleusercontent.com";

export const GoogleLoginButton: React.FC<IProps> = (props) => {

    const isGoogleLoginResponse = (arg: any): arg is GoogleLoginResponse => {
        return (arg as GoogleLoginResponse).profileObj !== undefined;
    };

    const handleSuccessResponse = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if (isGoogleLoginResponse(response)) {
            // TODO: send data back to backend
            console.log(response.profileObj);
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
        isSignedIn: false
    });

    const renderButton = (): JSX.Element => {
        if (props.useDefaultBtn)
            return (
                <GoogleLogin clientId={clientID}
                             onSuccess={handleSuccessResponse}
                             onFailure={handleFailureResponse}
                             cookiePolicy='single_host_origin'
                             isSignedIn={false} />
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

    const handleLogoutResponse = () => {
        console.log('Logged out successfully');
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