import React from 'react'
import { Close } from '@mui/icons-material'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import Form from './Form';

function AttestAddPopup(props) {

  const {
    openPopup,
    setOpenPopup
  } = props;

  return (
    <Dialog open={openPopup} >
      <DialogTitle>
        <div className="title">
          <div className="hed">New attestation</div>
          <div className="icon-cross" onClick={() => setOpenPopup(false) } ><Close/></div>
        </div>
      </DialogTitle>
      <DialogContent>
        <Form
        op={setOpenPopup}
         />
      </DialogContent>
    </Dialog>
  )
}

export default AttestAddPopup