import React, { useState } from 'react'
import fire from '../../../../../firebase_DB/firebaseAPI';

function Form(props) {

 const [Batch, setBatch] = useState('');

  const [Ameer, setAmeer] = useState('');

  const [Title, setTitle] = useState('');

  const [PaxSurName, setPaxSurName] = useState('');

  const [PaxGivenName, setPaxGivenName] = useState('');

  const [PassporNo, setPassporNo] = useState('');

  const [DOB, setDOB] = useState('');

  const [POI, setPOI] = useState('');

  const [DoI, setDoI] = useState('');

  const [DoE, setDoE] = useState('');

  const [ContactNumber, setContactNumber] = useState('');

  const [DateOfTravel, setDateOfTravel] = useState('');
   
  const [DateOfReturn, setDateOfReturn] = useState('');

  const [HotelInMakkah, setHotelInMakkah] = useState('');

  const [HotelInMadeena, setHotelInMadeena] = useState('');

  const [ButtonSubmit, setButtonSubmit] = useState('Submit')

  const newUmrah={
    Title:Title,
    PaxSurName:PaxSurName,
    PaxGivenName:PaxGivenName,
    PassporNo:PassporNo,
    DOB:DOB,
    POI:POI,
    DoI:DoI,
    DoE:DoE,
    ContactNumber:ContactNumber,
  }

  const handleSubmit = () => {
    setButtonSubmit("Loading...")
    fire.database().ref('batch1').push(newUmrah).then(()=>{
        setButtonSubmit('Success !')
        props.op(false)
    })
  }

  return (
    <div className="FormALl">
        <div className="Form">

            <div className="Inputs">
                <input type="text" className="Textinput" placeholder='Mr/Ms' value={Title} onChange={(e)=>setTitle(e.target.value)} />
            </div>

            <div className="Inputs">
                <input type="text" className="Textinput" placeholder='Pax Surname' value={PaxSurName} onChange={(e)=>setPaxSurName(e.target.value)} />
            </div>

            <div className="Inputs">
                <input type="text" className="Textinput" placeholder='Given name' value={PaxGivenName} onChange={(e)=>setPaxGivenName(e.target.value)} />
            </div>

            <div className="Inputs">
                <input type="text" className="Textinput" placeholder='Pax passport number' value={PassporNo} onChange={(e)=>setPassporNo(e.target.value)} />
            </div>

            <div className="Inputs">
                <input type="date" className="Textinput" value={DOB} onChange={(e)=>setDOB(e.target.value)} />
            </div>
            <div className="dt">Date of birth</div>

            <div className="Inputs">
                <input type="text" className="Textinput"  placeholder='Po I' value={POI} onChange={(e)=>setPOI(e.target.value)} />
            </div>

            <div className="Inputs">
                <input type="text" className="Textinput" placeholder='Do I' value={DoI} onChange={(e)=>setDoI(e.target.value)} />
            </div>

            <div className="Inputs">
                <input type="text" className="Textinput" placeholder='Do E' value={DoE} onChange={(e)=>setDoE(e.target.value)} />
            </div>

            <div className="Inputs">
                <input type="text" className="Textinput" placeholder='Contact number' value={ContactNumber} onChange={(e)=>setContactNumber(e.target.value)} />
            </div>

        </div>

        <div className="add-user">
        <button id='addsuer' onClick={handleSubmit} > {ButtonSubmit} </button>
        <button id='cancelPopup' onClick={()=>props.op(false)} > Cancel </button>
      </div>

    </div>
  )
}

export default Form