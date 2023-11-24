import React, { useState } from 'react'
import fire from '../../../../../firebase_DB/firebaseAPI';

function Form(props) {

  const [CandidateName, setCandidateName] = useState('');

  const [Job, setJob] = useState('');

  const [Country, setCountry] = useState('');

  const [Profession, setProfession] = useState('');

  const [Experience, setExperience] = useState('');

  const [Qualification, setQualification] = useState('');

  const [Price, setPrice] = useState('');

  const [ButtonSubmit, setButtonSubmit] = useState('Submit');

  const newRecruit = {
    candidatename:CandidateName,
    job:Job,
    country:Country,
    profession:Profession,
    experience:Experience,
    qualification:Qualification,
    price:Price
  }

  const handleSubmit = () => {
    if(CandidateName.length >0){
      if(Job.length>0){
        if(Country.length>0){
          if(Profession.length>0){
            if(Experience.length>0){
              if(Qualification.length>0){
                if(Price.length>0){
                  setButtonSubmit('Loading...')
                  fire.database().ref('Recruitment').push(newRecruit)
                  .then(()=>{
                    setButtonSubmit('Success !')
                    props.op(false)
                  })
                }else{
                  alert("Please enter price")
                }
              }else{
                alert("Please enter qualification")
              }
            }else{
              alert("Please enter experience")
            }
          }else{
            alert("Please enter Profession")
          }
        }else{
          alert("Please enter country")
        }
      }else{
        alert("Please enter job title")
      }
    }else{
      alert('Please enter candidate name')
    }
  }

  return (
    <div className="FormAll">
      <div className="Form">

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Candidate name' value={CandidateName} onChange={(e)=>setCandidateName(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Job' value={Job} onChange={(e)=>setJob(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Country' value={Country} onChange={(e)=> setCountry(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Profession' value={Profession} onChange={(e)=>setProfession(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Experience' value={Experience} onChange={(e)=>setExperience(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Qualification' value={Qualification} onChange={(e)=>setQualification(e.target.value)} />
        </div>

        <div className="Inputs">
          <input type="text" className="Textinput" placeholder='Price' value={Price} onChange={(e)=>setPrice(e.target.value)} />
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