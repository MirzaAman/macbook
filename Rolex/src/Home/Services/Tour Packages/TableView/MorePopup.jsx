import React from 'react'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material';

function MorePopup(props) {

  const {
    open,
    setOpen,
    TourName,
    TourPeriod,
    PaxName,
    PaxContactNumber,
    Vendor,
    Price,
    Tac
  } = props;

  return (
    <Dialog open={open} >
      <DialogTitle>
        <div className="title">
          <div className="hed"> {TourName} </div>
          <div className="icon-cross" onClick={()=>setOpen(false)} > <Close/> </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="FormAll-user">
          <div className="Form">

            <div className="inline">
              <div className="title-user">
                <label>
                  Tour Name:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {TourName}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Tour Period:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {TourPeriod}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Pax name:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {PaxName}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Pax Contact Number:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {PaxContactNumber}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Vendor:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {Vendor}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Price:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {Price}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Tac:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {Tac}
                </div>
              </div>
            </div>

          </div>

          <div id='okuserjb' onClick={()=>setOpen(false)} >
            <div id='setb'>
              Back
            </div>
          </div>

          <div className="ddb">
            <div id='meb' >
              Rolex Travel & Tours
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MorePopup