import React, { useState, createContext } from 'react';
import { IUserLogin } from './IUserLogin';

type UserLoginStateUpdate = React.SetStateAction<IUserLogin>;
type UserLoginDispatch = React.Dispatch<UserLoginStateUpdate>;

export const UserLoginContext = createContext<[IUserLogin, UserLoginDispatch]>([
    {
        userID: 0,
        name: '',
        email: '',
        imgUrl: '',
        accessToken: '',
        loggedIn: false
    },
    () => {}
]);

export const UserLoginProvider: React.FC = (props) => {
    const state = useState<IUserLogin>({
        userID: 0,
        name: '',
        email: '',
        imgUrl: '',
        accessToken: '',
        loggedIn: false
    });

    return (
        <UserLoginContext.Provider value={state}>
            {props.children}
        </UserLoginContext.Provider>
    );
}
