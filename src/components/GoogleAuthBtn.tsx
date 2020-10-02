import React from 'react';
import { Button } from '@material-ui/core';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin, GoogleLogin } from 'react-google-login';

interface IProps {
    useDefaultBtn: boolean;
    customText?: string;
    customVariant?: "text" | "outlined" | "contained" | undefined;
    customColor?: "inherit" | "primary" | "secondary" | "default" | undefined
}

export const GoogleAuthBtn: React.FC<IProps> = (props) => {
    const clientID: string = "393002801221-om8rvfesgm1vjf5sienfif6v126a3b06.apps.googleusercontent.com";

    const isGoogleLoginResponse = (arg: any): arg is GoogleLoginResponse => {
        return (arg as GoogleLoginResponse).profileObj !== undefined;
    };

    const handleResponse = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if (isGoogleLoginResponse(response)) {
            console.log(response.profileObj);
        }
    };

    const handleFailure = (err: any) => {
        console.log(err);
    }

    const google = useGoogleLogin({
        clientId: clientID,
        onSuccess: handleResponse,
        onFailure: handleFailure,
        cookiePolicy: 'single_host_origin',
        isSignedIn: false
    });

    const renderButton = (): JSX.Element => {
        if (props.useDefaultBtn)
            return (
                <GoogleLogin clientId={clientID}
                             onSuccess={handleResponse}
                             onFailure={handleFailure}
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