import React from 'react'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material';

function MoreId(props) {

  const {
    open,
    setOpen,
    batch,
    ameer,
    dot,
    dor,
    hotelinmakka,
    hotelinmadeena
  } = props;

  return (
    <Dialog open={open} >
      <DialogTitle>
        <div className="title">
          <div className="hed"> {ameer} </div>
          <div className="icon-cross" onClick={()=>setOpen(false)} > <Close/> </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="FormAll-user">
          <div className="Form">

            <div className="inline">
              <div className="title-user">
                <label>
                  Batch number:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {batch}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Ameer name:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {ameer}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Date of travelling:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {dot}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Date of return:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {dor}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Hotel in makka:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {hotelinmakka}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Hotel in madeena:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {hotelinmadeena}
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

export default MoreId