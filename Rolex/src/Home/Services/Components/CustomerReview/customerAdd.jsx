import React,{useState,useEffect} from 'react';
import {Dialog,DialogTitle,DialogContent} from '@mui/material';
import Form from './AddForm/Form';

export default function Popup(props) {

    

    let gender =['male','female']

    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} >
            <DialogTitle>
                <div className="title">New Customer 🆕</div>
            </DialogTitle>
            <DialogContent>
                <Form op={setOpenPopup}/>
            </DialogContent>
        </Dialog>
    );

}