import React from 'react'
import { Close } from '@mui/icons-material'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import AddEmiForm from './AddEmiForm'

function AddEmigrationData(props) {

  const { OpenAddEmiPopup, setOpenAddEmiPopup } = props;

  return (
    <Dialog open={OpenAddEmiPopup} >
      <DialogTitle>
        <div className="title">
          <div className="hed">New Emigration </div>
          <div className="icon-cross" onClick={()=> setOpenAddEmiPopup(false)} > <Close/> </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <AddEmiForm
        op={setOpenAddEmiPopup}
        />
      </DialogContent>
    </Dialog>
  )
}

export default AddEmigrationData