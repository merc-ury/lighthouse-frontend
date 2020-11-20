import React, { useState } from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
    message: string;
    open: boolean;
    handleClose: () => void;
}

export const Toast: React.FC<IProps> = (props) => {
    
    return (
        <Snackbar 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={props.open}
            autoHideDuration={5000}
            message={props.message}
            action={
                <React.Fragment>
                    <IconButton onClick={props.handleClose}>
                        <CloseIcon />
                    </IconButton>
                </React.Fragment>
            }/>
    );
};