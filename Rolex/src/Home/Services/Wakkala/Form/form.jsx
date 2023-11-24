import React,{useState,useEffect} from 'react';
import './form.css';
import fire from '../../../../firebase_DB/firebaseAPI';

function WakkalaForm(props) {

    const [CrrNumber, setcrrNumber] = useState(0);
    const [SurName, setSurName] = useState('');
    const [GivenName, setGivenName] = useState('');
    const [PassportNumber, setPassportNumber] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const [PlaceOfIssue, setPlaceOfBirth] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [whatsappNumber, setWhastappNumber] = useState('');
    const [sponsorContactNumber, setSponsorContactNumber] = useState('');
    const [visaNumber, setVisaNumber] = useState('');
    const [visaDate, setVisaDate] = useState('');
    const [sponsorIdNumber, setSponsorIdNumber] = useState('');
    const [Profession, setProfession] = useState('');
    const [visaReference, setVisaReference] = useState('');
    const [Remarks, setRemarks] = useState('');
    const [DoI, setDoI] = useState('');
    const [DoE, setDoE] = useState('');
    const [MofaNumber, setMofaNumber] = useState('');
    const [MofaDate, setMofaDate] = useState('');
    const [MedicalCenter, setMedicalCenter] = useState('');
    const [MedicalDate, setMedicalDate] = useState('');
    const [FileNumber, setFileNumber] = useState('');

    const [buttonSubmit, setbuttonSubmit] = useState('Submit')

    const newCs={
        crr:CrrNumber,
        surname:SurName,
        givenname:GivenName,
        passportnumber:PassportNumber,
        dob:DateOfBirth,
        placeofIssue:PlaceOfIssue,
        contactnumber:contactNumber,
        whatsappnumber:whatsappNumber,
        sponsorcontactnumber:sponsorContactNumber,
        visanumber:visaNumber,
        visadate:visaDate,
        sponsoridnumber:sponsorIdNumber,
        profession:Profession,
        visareference:visaReference,
        remarks:Remarks,
        doi:DoI,
        doe:DoE,
        mofanumber:MofaNumber,
        mofadate:MofaDate,
        medicalcenter:MedicalCenter,
        medicaldate:MedicalDate,
        filenumber:FileNumber,
    }

    const toCustomers = {
        name:newCs.surname+''+newCs.givenname
    }

    useEffect(()=>{
        setcrrNumber(props.CrrLatest)
        console.log(props.CrrLatest);
    },[])

    const handleSubmit = () => {
            if(SurName.length !=0){
                if(GivenName.length !=0){
                    if(PassportNumber.length !=0){
                        if(DateOfBirth.length !=0){
                            if(PlaceOfIssue.length !=0){
                                if(DoI.length !=0){
                                    if(DoE.length !=0){
                                        if(contactNumber.length !=0){
                                            if(contactNumber.length > 9){
                                                if(whatsappNumber.length !=0){
                                                    if(whatsappNumber.length > 9){
                                                        if(sponsorContactNumber.length !=0){
                                                            if(visaNumber.length !=0){
                                                                if(visaDate.length !=0){
                                                                    if(sponsorIdNumber.length !=0){
                                                                        if(Profession.length !=0){
                                                                            if(visaReference.length !=0){
                                                                                if(MofaNumber.length !=0){
                                                                                    if(MofaDate.length !=0){
                                                                                        if(MedicalCenter.length !=0){
                                                                                            if(MedicalDate.length !=0){
                                                                                                if(FileNumber.length !=0){
                                                                                                    setbuttonSubmit('Loading')
                                                                                                    fire.database().ref('Wakkala').push(newCs).then(()=>{
                                                                                                    fire.database().ref('Customers').push(toCustomers).then(()=>{
                                                                                                    setbuttonSubmit('Submit')
                                                                                                    props.op(false)
                                                                                                    console.log(DateOfBirth);
                                                                                                    console.log((PlaceOfIssue));
                                                                                                    })
                                                                                                    props.op(false);
                                                                                                    }).catch((err)=>alert(err.message))
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }else{
                                                                                alert('Please enter visa reference')
                                                                            }
                                                                        }else{
                                                                            alert('Please enter a profession')
                                                                        }
                                                                    }else{
                                                                        alert('Please enter sponsor ID number')
                                                                    }
                                                                }else{
                                                                    alert('Please enter visa date')
                                                                }
                                                            }else{
                                                                alert('please enter Visa Number ')
                                                            }
                                                        }else{
                                                            alert('Please enter Sponsor contact number')
                                                        }
                                                    }else{
                                                        alert('Whastapp form must contain atleast 10 digits')
                                                    }
                                                }else{
                                                    alert('Please enter a valid whatsapp number')
                                                }
                                            }else{
                                                alert('Contact form must contain atleast 10 digits')
                                            }
                                        }else{
                                            alert('Please enter a valid contact number')
                                        }
                                    }else{
                                        alert('Please enter Do E')
                                    }
                                }else{
                                    alert('Please enter Do I')
                                }
                            }else{
                                alert('Please enter place of issue')
                            }
                        }else{
                            alert('please enter your date of birth')
                        }
                    }else{
                        alert('Please enter customer passport number')
                    }
                }else{
                    alert('Please enter customer given name')
                }
            }else{
                alert('Please enter customer surname')
            }
    }

  return (
    <div className="FormAll">
            <div className="Form">
            <div className="Inputs">
                <input className='Textinput' value={SurName} onChange={(e) => setSurName(e.target.value)} type="text" placeholder='Sur Name' />
            </div>
            <div className="Inputs">
                <input className='Textinput' value={GivenName} onChange={(e) => setGivenName(e.target.value)} type="text" placeholder='Given Name' />
            </div>
            <div className="Inputs">
                <input className='Textinput' value={PassportNumber} onChange={(e) => setPassportNumber(e.target.value)} type="text" placeholder='Passport Number' />
            </div>
            <div className="Inputs">
                <input className='Textinput' value={DateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="date" />
            </div>
            <div className="dt">Date of birth</div>
            <div className="Inputs">
                <input className='Textinput' value={PlaceOfIssue} onChange={(e) => setPlaceOfBirth(e.target.value)} type="text" placeholder='Place of issue'/>
            </div>
            <div className="Inputs">
                <input type="text" className="Textinput" value={DoI} onChange={(e) => setDoI(e.target.value) } placeholder='Do I'  />
            </div>
            <div className="Inputs">
                <input type="text" className="Textinput" value={DoE} onChange={(e) => setDoE(e.target.value) } placeholder='Do E'  />
            </div>
            <div className="Inputs">
                <input className='Textinput' value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} type="text" placeholder='Contact Number'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={whatsappNumber} onChange={(e) => setWhastappNumber(e.target.value)} type="text" placeholder='Whatsapp'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={sponsorContactNumber} onChange={(e) => setSponsorContactNumber(e.target.value)} type="text" placeholder='Sponsor Contact Number'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={visaNumber} onChange={(e) => setVisaNumber(e.target.value)} type="text" placeholder='Visa Number'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={visaDate} onChange={(e)=>setVisaDate(e.target.value)} type="date" />
            </div>
            <div className="dt">Visa Date</div>
            <div className="Inputs">
                <input className='Textinput' value={sponsorIdNumber} onChange={(e) => setSponsorIdNumber(e.target.value)} type="text" placeholder='Sponsor ID number '/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={Profession} onChange={(e) => setProfession(e.target.value)} type="text" placeholder='Profession'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={visaReference} onChange={(e) => setVisaReference(e.target.value)} type="text" placeholder='Visa Reference'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={MofaNumber} onChange={(e) => setMofaNumber(e.target.value)} type="text" placeholder='Mofa Number'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={MofaDate} onChange={(e) => setMofaDate(e.target.value)} type="date" />
            </div>
            <div className="dt">Mofa Date</div>
            <div className="Inputs">
                <input className='Textinput' value={MedicalCenter} onChange={(e) => setMedicalCenter(e.target.value)} type="text" placeholder='Medical Center'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={MedicalDate} onChange={(e) => setMedicalDate(e.target.value)} type="date" />
            </div>
            <div className="dt">Medical Date</div>
            <div className="Inputs">
                <input className='Textinput' value={FileNumber} onChange={(e) => setFileNumber(e.target.value)} type="text" placeholder='File Number'/>
            </div>
            <div className="Inputs">
                <input className='Textinput' value={Remarks} onChange={(e) => setRemarks(e.target.value)} type="text" placeholder='Remarks'/>
            </div>
            </div>
        <div className="add-suer" >
            <button onClick={handleSubmit} id="addsuer" > {buttonSubmit} </button> 
            <button id="cancelPopup" onClick={()=> props.op(false)} >Cancel</button>
        </div>
    </div>
  )
}

export default WakkalaForm