import React, { useState } from 'react'
import fire from '../../../../firebase_DB/firebaseAPI';

function AddEmiForm(props) {

  const [PassengerName, setPassengerName] = useState('');

  const [PassengerContactNumber, setPassengerContactNumber] = useState('');

  const [VisaCountry, setVisaCountry] = useState('');

  const [VisaProfession, setVisaProfession] = useState('');

  const [Price, setPrice] = useState('');

  const [Vendor, setVendor] = useState('');

  const [ProcessingTimeCommited, setProcessingTimeCommited] = useState('');

  const [DateOfCommencement, setDateOfCommencement] = useState('');

  const [Tac, setTac] = useState('');

  const [buttonSubmit, setbuttonSubmit] = useState('Submit');

  const newEmi={
    passengername:PassengerName,
    passengercontactnumber:PassengerContactNumber,
    visacountry:VisaCountry,
    visaprofession:VisaProfession,
    price:Price,
    vendor:Vendor,
    processingtimecommited:ProcessingTimeCommited,
    dateofcommencement:DateOfCommencement,
    tac:Tac
  }

  const handleSubmit = () => {
    if(PassengerName.length>0){
      if(PassengerContactNumber.length>0){
        if(VisaCountry.length>0){
          if(VisaProfession.length>0){
            if(Price.length>0){
              if(Vendor.length>0){
                if(ProcessingTimeCommited.length>0){
                  setbuttonSubmit('Laoding...')
                  fire.database().ref('Emigration').push(newEmi).then(()=>{
                    setbuttonSubmit('Success!')
                    props.op(false)
                  })
                }else{
                  alert('Please enter processing time commited')
                }
              }else{
                alert('Please enter vendor')
              }
            }else{
              alert('Please enter Price')
            }
          }else{
            alert('please enter visa profession')
          }
        }else{
          alert('Please enter country of visa')
        }
      }else{
        alert('Please enter Passenger contact number')
      }
    }else{
      alert('Please enter Passenger name')
    }
  }

  return (
    <div className="FormAll">
      <div className="Form">
        <div className="Inputs">
          <input type="text" placeholder='Passennger Name' value={PassengerName} onChange={(e)=>setPassengerName(e.target.value)} className="Textinput" />
        </div>

        <div className="Inputs">
          <input type="text" placeholder='Passenger Contact Number' value={PassengerContactNumber} onChange={(e) =>setPassengerContactNumber(e.target.value) } className="Textinput" />
        </div>

        <div className="Inputs">
          <input type="text" placeholder='Visa Country' value={VisaCountry} onChange={(e) => setVisaCountry(e.target.value) } className="Textinput" />
        </div>

        <div className="Inputs">
          <input type="text" placeholder='Visa Profession' value={VisaProfession} onChange={(e) => setVisaProfession(e.target.value) } className="Textinput" />
        </div>

        <div className="Inputs">
          <input type="text" placeholder='Price' value={Price} onChange={(e)=>setPrice(e.target.value)} className="Textinput" />
        </div>

        <div className="Inputs">
          <input type="text" placeholder='Vendor' value={Vendor} onChange={(e)=>setVendor(e.target.value)} className="Textinput" />
        </div>

        <div className="Inputs">
          <input type="text" placeholder='Processing Time commited' value={ProcessingTimeCommited} onChange={(e)=>setProcessingTimeCommited(e.target.value)} className="Textinput" />
        </div>

        <div className="Inputs">
          <input type="date" placeholder='Date Of Commencement' value={DateOfCommencement} onChange={(e)=>setDateOfCommencement(e.target.value)} className="Textinput" />
        </div>

        <div className="Inputs">
          <input type="text" placeholder='TAC' value={Tac} onChange={(e)=>setTac(e.target.value)} className="Textinput" />
        </div>

      </div>

      <div className="add-suer">
        <button onClick={handleSubmit} id='addsuer' > {buttonSubmit} </button>
        <button id='cancelPopup' onClick={()=>props.op(false)} >Cancel</button>
      </div>

    </div>
  )
}

export default AddEmiForm