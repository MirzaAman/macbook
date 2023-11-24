import React from 'react'
import { Close } from '@mui/icons-material'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import Form from './Form';

function Popup(props) {

  const {
    open,
    setOpen
  } = props;

  return (
    <Dialog open={open} >
      <DialogTitle>
        <div className="title">
          <div className="hed">New Umrah</div>
          <div className="icon-cross" onClick={()=>setOpen(false)} ><Close/></div>
        </div>
      </DialogTitle>
      <DialogContent>
        <Form op={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default Popup