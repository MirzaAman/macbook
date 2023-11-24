import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';

import NoUser from './NoUser';

import AdminPanel from './Services/Components/AdminPanel';


import './Services.css'

function Services() {

  const auth= getAuth();

  const navigate = useNavigate();

  const [page, setPage] = useState(null)

  const [UserAuth, setUserAuth] = useState(false)

  useEffect(() => {
    
    const subscription = onAuthStateChanged(auth,user => {
      if(user!=null){
        setUserAuth(true)
      }else{
        navigate('/')
      }
    })
  
    return () => {
      subscription()
    }
  }, [])
  
  
  return (
    <div className='Container'>
      <div className='DropDown' >
        {UserAuth?<AdminPanel/>:null}
      </div>
    </div>
  )
}

export default Services