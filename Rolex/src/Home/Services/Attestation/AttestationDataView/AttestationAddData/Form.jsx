import React, { useState } from 'react'
import fire from '../../../../../firebase_DB/firebaseAPI';

function Form(props) {

  const [PassengerName, setPassengerName] = useState('')

  const [ContactNumber, setContactNumber] = useState('')

  const [Cirtificate, setCirtificate] = useState('')

  const [EmbassyOrConculate, setEmbassyOrConculate] = useState('')

  const [Procedure, setProcedure] = useState('')

  const [Price, setPrice] = useState('')
  
  const [Vendor, setVendor] = useState('')

  const [Tac, setTac] = useState('')

  const [ProcessingTime, setProcessingTime] = useState('')

  const [ButtonSubmit, setButtonSubmit] = useState('Submit')

  const newAttest = {
    passengername:PassengerName,
    contactnumber:ContactNumber,
    cirtificate:Cirtificate,
    embassyorconculate:EmbassyOrConculate,
    procedure:Procedure,
    price:Price,
    vendor:Vendor,
    tac:Tac,
    processingtime:ProcessingTime
  }

  const handleSubmit = () => {
    if(PassengerName.length>0){
      if(ContactNumber.length>0){
        if(Cirtificate.length>0){
          if(EmbassyOrConculate.length>0){
            if(Procedure.length>0){
              if(Price.length>0){
                if(Vendor.length>0){
                  if(Tac.length>0){
                    if(ProcessingTime.length>0){
                      setButtonSubmit('Loading...')
                      fire.database().ref('Attestation').push(newAttest).then(()=>{
                        setButtonSubmit('Success!')
                        props.op(false)
                      })
                    }else{
                      alert("Please enter procesing time")
                    }
                  }else{
                    alert("Please enter TAC")
                  }
                }else{
                  alert("Please enter vendor")
                }
              }else{
                alert("Please enter price")
              }
            }else{
              alert("Please enter procedure ")
            }
          }else{
            alert("Please enter embassy or conculate")
          }
        }else{
          alert("Please enter cirtificate")
        }
      }else{
        alert("Please enter Contact number")
      }
    }else{
      alert("Please enter Passenger Name")
    }
  }

  return (
    <div className="FormAll">
      <div className="Form">

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Passenger name' value={PassengerName} onChange={(e)=>setPassengerName(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Contact number' value={ContactNumber} onChange={(e)=>setContactNumber(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Cirtificate' value={Cirtificate} onChange={(e)=>setCirtificate(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Embessy / Conculate' value={EmbassyOrConculate} onChange={(e) => setEmbassyOrConculate(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Procedure' value={Procedure} onChange={(e)=>setProcedure(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Price' value={Price} onChange={(e)=>setPrice(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Vendor' value={Vendor} onChange={(e)=>setVendor(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Vendor' value={Tac} onChange={(e)=>setTac(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Processing Time' value={ProcessingTime} onChange={(e)=>setProcessingTime(e.target.value)} />
        </div>

      </div>

      <div className="add-user">
        <button onClick={handleSubmit} id='addsuer' > {ButtonSubmit} </button>
        <button id='cancelPopup' onClick={()=>props.op(false)} > Cancel </button>
      </div>

    </div>
  )
}

export default Form