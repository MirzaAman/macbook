import React from 'react'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material';

function More(props) {

  const {
    open,
    setOpen,
    title,
    surname,
    givenname,
    passport,
    dob,
    poi,
    doi,
    doe,
    number
  } = props;

  return (
    <Dialog open={open} >
      <DialogTitle>
        <div className="title">
          <div className="hed"> {passport} </div>
          <div className="icon-cross" onClick={()=>setOpen(false)} ><Close/></div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="FormAll-user">
          <div className="Form">

            <div className="inline">
              <div className="title-user">
                <label>
                  Mr/Ms:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {title}
                </div>
              </div>
            </div>
            
            <div className="inline">
              <div className="title-user">
                <label>
                  Pax Surname:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {surname}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Pax Given name:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {givenname}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Passport number:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {passport}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Date of birth:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {dob}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Po I:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {poi}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Do I:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {doi}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Do E:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {doe}
                </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Contact number:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text">
                  {number}
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

export default More