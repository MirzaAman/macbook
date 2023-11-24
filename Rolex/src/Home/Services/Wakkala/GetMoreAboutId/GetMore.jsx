import React,{useState,useEffect} from 'react';
import { Dialog,DialogTitle,DialogContent } from '@mui/material';
import fire from '../../../../firebase_DB/firebaseAPI';
import { Close, Edit } from '@mui/icons-material';

import './GetMore.css'

export default function GetMore(props) {

    const { 
        openMore,
        setOpenMore, 
        crr, 
        iduser, 
        passportnumber, 
        userdob, 
        placeofissue,
        doi,
        doe, 
        contactnumber, 
        whatsappnumber, 
        sponsorcontactnumber, 
        visanumber, 
        visadate, 
        sponsoridnumber, 
        profession, 
        visareference,
        remarks,
        useridorigin,
        mofanumber,
        mofadate,
        medicalcenter,
        medicaldate,
        filenumber
    } = props;

    const [ShowEdit, setShowEdit] = useState(false)

    const [Edited, setEdited] = useState('')

    const updateDoc = () => {
        fire.database().ref('Wakkala').child(useridorigin).update({remarks:Edited})
        .then((ewe) => {
            setShowEdit(false)
            setOpenMore(false)
        })
    }

    const closeText = () => {
        setShowEdit(false)
        setEdited('')
    }
    
    return(
        <Dialog open={openMore} >
            <DialogTitle>
            <div className="title">
                    <div className="hed">CRR : {crr} </div> 
                    <div className="icon-cross" onClick={()=> setOpenMore(false)} ><Close/></div>
                </div>
            </DialogTitle>
            <DialogContent>
                <div className="FormAll-user" >
                    <div className="Form">
                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Name:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{iduser}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    PassPort Number:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' > {passportnumber} </h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    DOB:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{userdob}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Place of issue:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{placeofissue}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Do I:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{doi}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Do E:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{doe}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Contact number:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{contactnumber}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Whatsapp number:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{whatsappnumber}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Sponor's contact number:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{sponsorcontactnumber}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Visa number:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{visanumber}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Visa date:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{visadate}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Sponsor's Id:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{sponsoridnumber}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Profession:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{profession}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Visa Reference:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{visareference}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Mofa Number:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{mofanumber}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Mofa Date:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{mofadate}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Medical Center:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{medicalcenter}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Medical Date:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{medicaldate}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    File Number:-
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className='content-user-text' >{filenumber}</h6>
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    Remarks:-
                                </label>
                            </div>
                            <div className="content-user betp">
                                {
                                    ShowEdit? 
                                    <input 
                                    className='content-user-text inputs' 
                                    value={Edited} 
                                    placeholder={remarks} 
                                    onChange={(e) => setEdited(e.target.value) } />
                                    :
                                    <h6 className='content-user-text' onClick={()=>setShowEdit(true)} >{remarks}</h6>
                                }
                                {
                                    ShowEdit? <div className="edit" onClick={closeText} ><Close/></div> : <div className="edit" onClick={() => setShowEdit(true) }  > <Edit/> </div>
                                }
                            </div>
                        </div>

                        <div className="inline">
                            <div className="title-user">
                                <label>
                                    User id info
                                </label>
                            </div>
                            <div className="content-user">
                                <h6 className="content-user-text"> {useridorigin} </h6>
                            </div>
                        </div>
                        
                    </div>

                    <div id='okuserj' onClick={()=>setOpenMore(false)} >
                        <div id='set' >
                         Back 
                        </div>
                    </div>

                    {
                        (Edited.length>0) && (
                            <div id='okuserj' onClick={updateDoc} >
                               <div id='set' >
                                 Update
                               </div>
                            </div>
                        )
                    }

                        <div className="dd">
                            <h6 id='me'>
                                Rolex Travel & Tours
                            </h6>
                        </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}