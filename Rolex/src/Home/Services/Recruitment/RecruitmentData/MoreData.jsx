import React from 'react'
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material';


function MoreData(props) {

  const {
    open,
    setOpen,
    cdname,
    cnt,
    jb,
    pro,
    exp,
    ql,
    pr
  } = props;

  return (
    <Dialog open={open} >
      <DialogTitle>
        <div className="title">
          <div className="hed"> {cdname} </div>
          <div className="icon-cross" onClick={()=>setOpen(false)} ><Close/></div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="FormAll-user">
          <div className="Form">

            <div className="inline">
              <div className="title-user">
                <label>
                  Candidate Name :-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {cdname} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Job:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {jb} </div>
              </div>
            </div>
            
            <div className="inline">
              <div className="title-user">
                <label>
                  Country:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {cnt} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Profession:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {pro} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Experience:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {exp} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Qualification:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> {ql} </div>
              </div>
            </div>

            <div className="inline">
              <div className="title-user">
                <label>
                  Price:-
                </label>
              </div>
              <div className="content-user">
                <div className="content-user-text"> ₹ {pr} </div>
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

export default MoreData