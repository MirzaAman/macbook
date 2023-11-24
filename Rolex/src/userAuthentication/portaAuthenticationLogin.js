import React,{useState,useEffect} from 'react';
import firebase from '../firebase_DB/firebaseAPI';
import Services from '../Home/services';
import './portAuth.css';
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'

function PortUserLogin() {

    const navigate = useNavigate();

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Auth, setAuth] = useState(false)

    const fireErr = () => {
        setAuth(false)
        alert('No user Found, Please check your Email and Password')
    }

    const handleLogin = () => {
        if(Email.length >12){
            if(Password.length>7){
                setAuth(true)
                firebase.auth().signInWithEmailAndPassword(Email, Password).then(userCredentials =>{
                    navigate('/services');
                    setAuth(false)
                }).catch(err => fireErr())
            }else{
                setAuth(false)
                alert("Please enter atleast 8 characters")
            }
        }else{
            setAuth(false)
            alert("Please enter atleast 13 characters")
        }
    }

  return (
    <div>
        <section className='login'>
        <div className='loginContainer' >
            <label>User Name</label>
            <input
            type='text'
            autoFocus
            required
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className='errorMsg' ></p>
            <label>Password</label>
            <input 
            type="text"
            required
            value={Password}
            onChange={(e) => setPassword(e.target.value)} 
            />
            <p className='errorMsg'></p>
            <div className='btnContainer'>
                <button onClick={handleLogin} >{Auth? 'Loading...':'Login'}</button>
            </div>
        </div>
        </section>
    </div>
  )
}

export default PortUserLogin
