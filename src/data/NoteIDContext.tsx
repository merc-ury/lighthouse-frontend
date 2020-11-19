import React, { useState, createContext } from 'react';

type NoteIDStateUpdate = React.SetStateAction<number>;
type NoteIDDispatch = React.Dispatch<NoteIDStateUpdate>;

export const NoteIDContext = createContext<[number, NoteIDDispatch]>([
    0,
    () => {}
]);

export const NoteIDProvider: React.FC = (props) => {
    const state = useState<number>(0);

    return (
        <NoteIDContext.Provider value={state}>
            {props.children}
        </NoteIDContext.Provider>
    )
};