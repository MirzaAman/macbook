import React from 'react'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material';


function MoreAttest(props) {

  const {
    openMorePopup,
    setOpenMorePopup,
    passengername,
    contactnumber,
    cirtificate,
    embassyorconculate,
    procedure,
    price,
    vendor,
    tac,
    processingtime

  } = props;

  return (
    <Dialog open={openMorePopup} >
      <DialogTitle>
        <div className="title">
          <div className="hed"> {passengername} </div>
          <div className="icon-cross" onClick={()=>setOpenMorePopup(false)} ><Close/></div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="FormAll-user">
          <div className="Form">

            <div className="inline">
              <div className="title-user">
                <label>
                  Passenger Name:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {passengername} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label> 
                  Contact Number:- 
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {contactnumber} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Cirtificate:- 
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {cirtificate} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Embassy / Conculate:- 
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {embassyorconculate} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Procedure:- 
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {procedure} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Price:- 
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {price} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Vendor:- 
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {vendor} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Tac:- 
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {tac} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Procesing Time :- 
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {processingtime} </div>
              </div>
            </div>

          </div>

          <div id='okuserjb' onClick={()=>setOpenMorePopup(false)} >
            <div id='setb' >
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

export default MoreAttest