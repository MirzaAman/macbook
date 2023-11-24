import React,{useState,useEffect} from 'react';
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import fire from '../../../../../firebase_DB/firebaseAPI';
import './ff.css'
import { Close } from '@mui/icons-material';

function AirTicketMore(props) {

    const {
        openAirMore,
        setOpenAirMore,
        passengername,
        sector,
        passengercontact,
        pnr,
        fare,
        tae,
        vendor
    } = props;

  return (
    <Dialog open={openAirMore} >
        <DialogTitle>
            <div className="title">
                <div className="hed"> {passengername} </div>
                <div className="icon-cross" onClick={() => setOpenAirMore(false)} > <Close/> </div>
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
                          <div className="content-user-text">{passengername}</div>
                      </div>
                    </div>  

                    <div className="inline">
                        <div className="title-user">
                            <label>
                                Sector:-
                            </label>
                        </div>
                       <div className="content-user">
                           <div className="content-user-text">{sector}</div>
                       </div>
                    </div>

                    <div className="inline">
                        <div className="title-user">
                            <label>
                                Passenger contact:-
                            </label>
                        </div>
                       <div className="content-user">
                           <div className="content-user-text">{passengercontact}</div>
                       </div>
                    </div>

                    <div className="inline">
                        <div className="title-user">
                            <label>
                                PNR:-
                            </label>
                        </div>
                       <div className="content-user">
                           <div className="content-user-text">{pnr}</div>
                       </div>
                    </div>

                    <div className="inline">
                        <div className="title-user">
                            <label>
                                Fare:-
                            </label>
                        </div>
                       <div className="content-user">
                           <div className="content-user-text">{fare}</div>
                       </div>
                    </div>

                    <div className="inline">
                        <div className="title-user">
                            <label>
                                Tae:-
                            </label>
                        </div>
                       <div className="content-user">
                           <div className="content-user-text">{tae}</div>
                       </div>
                    </div>

                    <div className="inline">
                        <div className="title-user">
                            <label>
                                Vendor:-
                            </label>
                        </div>
                       <div className="content-user">
                           <div className="content-user-text">{vendor}</div>
                       </div>
                    </div>

                </div>

                <div id="okuserjb" onClick={()=>setOpenAirMore(false)} >
                    <div id="setb"  >
                        Back
                    </div>
                </div>

                <div className="ddb">
                        <h6 id="meb">
                            Rolex Travel & Tours
                        </h6>
                    </div>

            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AirTicketMore