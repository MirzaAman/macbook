import React,{useState,useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

import TableView from './Data/TableView';
import Popup from './AddData/Popup';

function UmrahMain() {
  const auth= getAuth();

  const navigate = useNavigate();

  const [page, setPage] = useState(null)

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
  })

  const [OpenAddPopup, setOpenAddPopup] = useState(false)

  return (
    <>

    <div className="CustomerData">
      <div className="Customers">
        {/* <div className="Search">
          <div className="SearchBox">
            <div className="SearchInput">
              <input
              type="text"
              className="InputEmail"
              required
              placeholder='Enter something to search !'
               />
            </div>
            <div className="add-button" onClick={()=>setOpenAddPopup(true)} >
              <h6>
                Add
              </h6>
            </div>
          </div>
        </div> */}
        <div className="CustomerTable">
          <TableView/>
        </div>
      </div>
    </div>

    <Popup
    open={OpenAddPopup}
    setOpen={setOpenAddPopup}
     />

    </>
  )
}

export default UmrahMain