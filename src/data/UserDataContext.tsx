import React, { useState, createContext } from 'react';
import { IUserData } from './IUserData';

type UserDataStateUpdate = React.SetStateAction<IUserData>;
type UserDataDispatch = React.Dispatch<UserDataStateUpdate>;

export const UserDataContext = createContext<[IUserData, UserDataDispatch]>([
    {
        loggedIn: false
    },
    () => {}
]);

export const UserDataProvider: React.FC = (props) => {
    const state = useState<IUserData>({
        googleId: '0',
        name: '',
        email: '',
        imgUrl: '',
        loggedIn: false
    });

    return (
        <UserDataContext.Provider value={state}>
            {props.children}
        </UserDataContext.Provider>
    );
}
