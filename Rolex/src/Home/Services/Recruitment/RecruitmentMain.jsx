import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';

import RecruitmentDataTableView from './RecruitmentData/RecruitmentDataTableVie';
import AddForm from './RecruitmentData/RecruitmentAddData/AddForm';

function RecruitmentMain() {
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
  },)

  const [OpenAddPopup, setOpenAddPopup] = useState(false)

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
            <div className="add-button" onClick={()=> setOpenAddPopup(true)} >
              <h6>Add</h6>
            </div>
          </div>
        </div>
        <div className="CustomerTable">
          <RecruitmentDataTableView/>
        </div>
      </div>
    </div>

    <AddForm
    openPopup={OpenAddPopup}
    setOpenPopup={setOpenAddPopup}
    />

    </>
  )
}

export default RecruitmentMain 