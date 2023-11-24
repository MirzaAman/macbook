import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import './first.css';

import DataTableView from './TableView/DataTableView';
import Popup from './AddData/Popup';

function TourPackagesMain() {
  const auth= getAuth();

  const navigate = useNavigate();

  const [page, setPage] = useState(null)

  useEffect(() => {
    
    const subscription = onAuthStateChanged(auth,user => {
      if(user!=null){
        setPage(true)
      }else{
        navigate('/');
        console.log(page);
      }
    })
  
    return () => {
      subscription()
    }
  })

  const [OpenAddPopup, setOpenAddPopup] = useState(false)

  return (
    <> 

    <div className="CustomerDaata">
      <div className="Customers">
        <div className="Search">
          <div className="SearchBox">
            <div className="SearchInput">
              <input
              type="text"
              className="InputEmail"
              required
              placeholder='Enter something to search!'
               />
               <div className="add-button" onClick={()=>setOpenAddPopup(true)} >
                <h6>
                  Add
                </h6>
               </div>
            </div>
          </div>
        </div>
        <div className="CustomerTable">
          <DataTableView/>
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

export default TourPackagesMain