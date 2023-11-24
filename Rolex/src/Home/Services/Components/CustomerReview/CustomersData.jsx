import React,{useState,useEffect} from 'react'
import './customerData.css'

import CustomersTable from './CustomerTable';
import Popup from './customerAdd';
import {Search,Close} from '@mui/icons-material';
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom';


import fire from '../../../../firebase_DB/firebaseAPI';

function CustomersData(props) {

  const Navigate = useNavigate();

  const [EmailInput, setEmailInput] = useState('')

  const [openPopup, setOpenPopup] = useState(false)

  const clearInput = () => {
    setEmailInput('')
  }

    const [CRRnumber, setCRRnumber] = useState([])

//   const SearchGo = () => {
//     if(EmailInput.length!=0){
//       if(EmailInput.length>12){
//         alert("Fetching data")
//       }else{
//         alert("No User Found !")
//       }
//   }else{
//     alert("please enter something !")
//   }
// } 

  return (
    <>
    <div className="CustomersData">
      <div className="Customers">
        <div className="CustomersTable">
          <CustomersTable CRRnumber={CRRnumber} setCRRnumber={setCRRnumber} />
        </div>
      </div>
    </div>
    <Popup 
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}
    >
    </Popup>
    </>
  )
}

export default CustomersData