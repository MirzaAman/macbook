import React,{useState,useEffect} from 'react'
import './formall.css'
import fire from '../../../../../firebase_DB/firebaseAPI'

function Form(props) {

    const [Name, setName] = useState('');
    const [TravelId, setTravelId] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Gender, setGender] = useState('')
    const [Job, setJob] = useState('')

    const newCs={
        name:Name,
        travel_id:TravelId,
        mobile:Mobile,
        gender:Gender,
        job:Job
    }

    const handleSubmit = () => {

        if(Name.length != 0){
            if(TravelId.length !=0){
                if(Mobile.length !=0){
                    if(Mobile.length >9){
                        if(Gender != ''){
                            if(Job != ''){
                                fire.database().ref('Customers').push(newCs).then(()=>{
                                    props.op(false)
                                })
                                console.log(newCs);
                            }else{
                                alert('Please select a job from the list')
                            }
                        }else{
                            alert('Please select the gender')
                        }
                    }else{
                        alert('Please enter 10 digit numbers as mobile number')
                    }
                }else{
                    alert('Please enter mobile number')
                }
            }else{
                alert('Please enter a TravelId')
            }
        }else{
            alert('Please enter a name')
        }
    }

  return (
    <div className="FormAll">
        <div className="form-user">
        <div className="FormRight">
            <div className="Form">
            <div className="Inputs">
                <input className='Textinput' value={Name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full Name' />
            </div>
            <div className="Inputs">
                <input className='Textinput' value={TravelId} onChange={(e) => setTravelId(e.target.value)} type="text" placeholder='Travel Id' />
            </div>
            <div className="Inputs">
                <input className='Textinput' value={Mobile} onChange={(e) => setMobile(e.target.value)} type="text" placeholder='Mobile' />
            </div>
            </div>
        </div>
        <div className="FormLeft">
            <label> Gender </label>
            <div className="genderRadio">
            <input className='radio' onChange={() => setGender('Male') } type="radio" value='Male' name="valuesofradio"  />
            <label className='genderLabel' > Male </label>
            <input className='radio2' onChange={() => setGender('Female')} type="radio" value='Female' name="valuesofradio"  />
            <label className='genderLabel' > Female </label>
            </div>
            <select className='pl-3' id="job" onChange={(e) => setJob(e.target.value)} >
                <option value="">Department</option>
                <option value="job one">Job one</option>
                <option value="job two">Job two</option>
                <option value="job three">Job three</option>
                <option value="job four">Job four</option> 
            </select>
        </div>
        </div>
        <div className="add-suer" onClick={handleSubmit} >
            <button id="addsuer">Submit</button>
        </div>
    </div>
  )
}

export default Form