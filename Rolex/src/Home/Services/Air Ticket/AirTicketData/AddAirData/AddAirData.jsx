import React,{useState,useEffect} from 'react';
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import AirForm from './AirForm/AirForm';
import { Close } from '@mui/icons-material'

function AddAirData(props) {

    const { openAirPopup, setAirPopup } = props;

  return (
    <Dialog open={openAirPopup} >
        <DialogTitle>
            <div className="title">
              <div className="hed">New Air Ticket</div>
              <div className="icon-cross" onClick={()=> setAirPopup(false)} ><Close/></div>
            </div>
        </DialogTitle>
        <DialogContent>
            <AirForm op={setAirPopup}  />
        </DialogContent>
    </Dialog>
  )
}

export default AddAirData