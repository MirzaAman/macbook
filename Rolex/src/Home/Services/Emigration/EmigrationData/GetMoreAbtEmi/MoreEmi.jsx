import React from 'react'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import fire from '../../../../../firebase_DB/firebaseAPI';
import { Close } from '@mui/icons-material';

function MoreEmi(props) {

  const { 
    EmiMore,
    setEmiMore,
    passengername,
    passengercontactnumber,
    visacountry,
    visaprofession,
    price,
    vendor,
    processingtimecommited,
    dateofcommencement,
    tac
   } = props;

  return (
    <Dialog open={EmiMore} >
      <DialogTitle>
        <div className="title">
          <div className="hed"> {passengername} </div>
          <div className="icon-cross" onClick={()=>setEmiMore(false)} > <Close/> </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="FormAll-user">
          <div className="Form">

            <div className="inline">
              <div className="title-user">
                <label> Passenger Name:- </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {passengername} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label> Passenger Contact Number:- </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {passengercontactnumber} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label> Visa Country :- </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {visacountry} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label> Visa Profession:- </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {visaprofession} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label> Price:- </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">₹ {price} </div>
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
                  Processing time commited:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {processingtimecommited} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Date of Commencement:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {dateofcommencement} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  TAC:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {tac} </div>
              </div>
            </div>

          </div>

          <div id='okuserjb' onClick={()=> setEmiMore(false)} >
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

export default MoreEmi