import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';

import EmigrationTableView from './EmigrationData/EmigrationTableView';
import AddEmigrationData from './EmigrationData/EmigrationData';

function EmigrationMain() {
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
  }, [])

  const [OpenAddEmiPopup, setOpenAddEmiPopup] = useState(false)

  return (
    <>
    <div className="CustomerData">
      <div className="Customers">
        <div className="Search">
          <div className="SearchBox">
            <div className="SearchInput">
              <input
               type="text"
               className="InputEmail"
               autoFocus
               required
               placeholder='Enter here something to search'
                />
            </div>
            <div className="add-button" onClick={() => setOpenAddEmiPopup(true)} >
              <h6>Add</h6>
            </div>
          </div>
        </div>
        <div className="CustomerTable">
          <EmigrationTableView/>
        </div>
      </div>
    </div>
    <AddEmigrationData
    OpenAddEmiPopup={OpenAddEmiPopup}
    setOpenAddEmiPopup={setOpenAddEmiPopup}
    />
    </>
  )
}

export default EmigrationMain