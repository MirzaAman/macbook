import React,{useState,useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import {Search,Close} from '@mui/icons-material';
import CustomersData from '../Components/CustomerReview/CustomersData';
import AirTicketTableView from './AirTicketData/AirTicketTableView';
import AddAirData from './AirTicketData/AddAirData/AddAirData';

function AirTicketMain() {
  const auth= getAuth();

  const navigate = useNavigate();

  const [page, setPage] = useState(null)

  const [Search, setSearch] = useState('')

  useEffect(() => {
    
    const subscription = onAuthStateChanged(auth,user => {
      if(user!=null){
        setPage(true)
      }else{
        navigate('/');
      }
    })
  
    return () => {
      subscription()
    }
  }, [])

  const [openAirPopup, setopenAirPopup] = useState(false)
  
  return (
    <>
    <div className="CustomerData">
      <div className="Customers">
        <div className="Search">
          <div className="SearchBox">
            <div className="SearchInput" >
            <input 
            type="text"
            autoFocus
            className='InputEmail'
            required
            placeholder='Enter Cutomer PNR number to search'
            />
           </div>
           <div className="add-button" onClick={()=>setopenAirPopup(true)} >
            <h6>Add</h6>
           </div>
          </div>
        </div>
        <div className="CustomerTable">
            <AirTicketTableView />
        </div>
      </div>
    </div>

    <AddAirData 
    openAirPopup={openAirPopup}
    setAirPopup={setopenAirPopup}
    />
    </>
  )
}

export default AirTicketMain