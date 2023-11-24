import React,{useState,useEffect} from 'react';
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import WakkalaForm from './Form/form';
import './wakalaStyle.css'
import { Close } from '@mui/icons-material';

export default function WakkalaPopup(props){

    const { openPopup,setopenPopup } = props;

    return(
        <Dialog open={openPopup} >
            <DialogTitle>
                <div className="title">
                    <div className="hed">New wakkala</div> 
                    <div className="icon-cross" onClick={()=> setopenPopup(false)} ><Close/></div>
                </div>
            </DialogTitle>
            <DialogContent>
                <WakkalaForm op={setopenPopup} CrrLatest={props.LatestCrr}/>
            </DialogContent>
        </Dialog>
    )
    
}