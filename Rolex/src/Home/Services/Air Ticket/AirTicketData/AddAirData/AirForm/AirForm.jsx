import React, {useState, useEffect} from 'react';
import fire from '../../../../../../firebase_DB/firebaseAPI';

export default function AirForm(props) {

    const [PassengerName, setPassengerName] = useState('')

    const [Sector, setSector] = useState('')

    const [PassengerContact, setPassengerContact] = useState('')

    const [Pnr, setPnr] = useState('')

    const [Fare, setFare] = useState('')

    const [Tae, setTae] = useState('')

    const [Vendor, setVendor] = useState('')

    const [buttonSubmit, setbuttonSubmit] = useState('Submit')

    const nnewAir={
        passengername:PassengerName,
        sector:Sector,
        passengercontact:PassengerContact,
        pnr:Pnr,
        fare:Fare,
        tae:Tae,
        vendor:Vendor
    } 

    const handleSubmit = () => {
        if(PassengerName.length>0){
            if(Sector.length>0){
                if(PassengerContact.length>0){
                    if(Pnr.length>0){
                        if(Fare.length>0){
                            if(Tae.length>0){
                                if(Vendor.length>0){
                                    setbuttonSubmit('Loading')
                                    fire.database().ref('AirTicket').push(nnewAir).then(()=>{
                                        setbuttonSubmit('Success')
                                        props.op(false)
                                    })
                                }else{
                                    alert('Please enter Vendor')
                                } 
                            }else{
                                alert('Please enter Tae')
                            }
                        }else{
                            alert('Please enter Fare')
                        }
                    }else{
                        alert('Please enter PNR')
                    }
                }else{
                    alert('Please enter Passenger Contact')
                }
            }else{
                alert('Please enter Sector')
            }
        }else{
            alert('Please enter Passenger Name')
        }
    }

    return(
        <div className="FormAll">
            <div className="Form">
                <div className="Inputs">
                    <input type="text" placeholder='Passenger Name' className='Textinput' value={PassengerName} onChange={(e) => setPassengerName(e.target.value) } />
                </div>
                <div className="Inputs">
                    <input type="text" placeholder='Sector' className='Textinput' value={Sector} onChange={(e) => setSector(e.target.value) } />
                </div>
                <div className="Inputs">
                    <input type="text" placeholder='Passenger contact' className='Textinput' value={PassengerContact} onChange={(e) => setPassengerContact(e.target.value) } />
                </div>
                <div className="Inputs">
                    <input type="text" placeholder='PNR' className='Textinput' value={Pnr} onChange={(e) => setPnr(e.target.value) } />
                </div>
                <div className="Inputs">
                    <input type="text" placeholder='Fare' className='Textinput' value={Fare} onChange={(e) => setFare(e.target.value) } />
                </div>
                <div className="Inputs">
                    <input type="text" placeholder='Tae' className='Textinput' value={Tae} onChange={(e) => setTae(e.target.value) } />
                </div>
                <div className="Inputs">
                    <input type="text" placeholder='Vendor' className='Textinput' value={Vendor} onChange={(e) => setVendor(e.target.value) } />
                </div>
            </div>
            <div className="add-user">
                <button onClick={handleSubmit} id='adduser' > {buttonSubmit} </button>
                <button id='cancelPopup'onClick={() => props.op(false) } > Cancel </button>
            </div>
        </div>
    );

}