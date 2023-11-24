import React, { useState } from 'react'
import fire from '../../../../firebase_DB/firebaseAPI';
import Dropdown from 'react-bootstrap/Dropdown';

function Form(props) {

  const [Batch, setBatch] = useState('');

  const [Ameer, setAmeer] = useState('');

  const [DateOfTravel, setDateOfTravel] = useState('');

  const [DateOfReturn, setDateOfReturn] = useState('');

  const [HotelInMakkah, setHotelInMakkah] = useState('');

  const [HotelInMadeena, setHotelInMadeena] = useState('');

  const [ButtonSubmit, setButtonSubmit] = useState('Submit')

  const newUmrahId={
    Batch:Batch,
    Ameer:Ameer,
    DateOfTravel:DateOfTravel,
    DateOfReturn:DateOfReturn,
    HotelInMakkah:HotelInMakkah,
    HotelInMadeena:HotelInMadeena
  }

  const handleSubmit = () => {
    if(Batch.length>0){
      if(Ameer.length>0){
        if(DateOfTravel.length>0){
          if(DateOfReturn.length>0){
            if(HotelInMakkah.length>0){
              if(HotelInMadeena.length>0){
                setButtonSubmit("Loading...")
                fire.database().ref('batch'+Batch).push(newUmrahId)
                .then(()=>{
                  fire.database().ref('UmrahBatches').push(newUmrahId)
                  .then(()=>{
                    setButtonSubmit("Success...!")
                  props.op(false)
                  })
                }).catch((err)=>alert(err.message))
              }
            }
          }
        }
      }
    }
  }

  return (
    <div className="FormAll">
      <div className="Form">

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Batch number' value={Batch} onChange={(e)=>setBatch(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Ameer' value={Ameer} onChange={(e)=>setAmeer(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Date of Travel' value={DateOfTravel} onChange={(e)=>setDateOfTravel(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Date of Return' value={DateOfReturn} onChange={(e)=>setDateOfReturn(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Hotel in Makkah' value={HotelInMakkah} onChange={(e)=>setHotelInMakkah(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Hotel in Madeena' value={HotelInMadeena} onChange={(e)=>setHotelInMadeena(e.target.value)} />
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