import React, { useState } from 'react'
import fire from '../../../../firebase_DB/firebaseAPI';

function Form(props) {

  const [TourName, setTourName] = useState('');

  const [TourPeriod, setTourPeriod] = useState('');

  const [PaxName, setPaxName] = useState('');

  const [PaxContactNumber, setPaxContactNumber] = useState('');

  const [Vendor, setVendor] = useState('');

  const [Price, setPrice] = useState('');

  const [Tac, setTac] = useState('');

  const [ButtonSubmit, setButtonSubmit] = useState('Submit');

  const newTour={
    TourName:TourName,
    TourPeriod:TourPeriod,
    PaxName:PaxName,
    PaxContactNumber:PaxContactNumber,
    Vendor:Vendor,
    Price:Price,
    Tac:Tac
  }

  const handleSubmit = () => {
    if(TourName.length>0){
      if(TourPeriod.length>0){
        if(PaxName.length>0){
          if(PaxContactNumber.length>0){
            if(Vendor.length>0){
              if(Price.length>0){
                if(Tac.length>0){
                  setButtonSubmit('Loading...')
                  fire.database().ref('TourPackage').push(newTour)
                  .then(()=>{
                    setButtonSubmit("Success !")
                    props.op(false)
                  })
                }else{
                  alert('Please enter tac')
                }
              }else{
                alert("Please enter price")
              }
            }else{
              alert("Please enter vendor")
            }
          }else{
            alert("Please enter Pax contact number")
          }
        }else{
          alert("Please enter pax name")
        }
      }else{
        alert("Please enter tour period")
      }
    }else{
      alert("Please enter Tour name")
    }
  }

  return (
    <div className="FormAll">
      <div className="Form">

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Tour package name' value={TourName} onChange={(e)=>setTourName(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Tour period' value={TourPeriod} onChange={(e)=>setTourPeriod(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Pax name' value={PaxName} onChange={(e)=>setPaxName(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Pax contact number' value={PaxContactNumber} onChange={(e)=>setPaxContactNumber(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Vendor' value={Vendor} onChange={(e)=>setVendor(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Price' value={Price} onChange={(e)=>setPrice(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Tac' value={Tac} onChange={(e)=>setTac(e.target.value)} />
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