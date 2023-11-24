import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import {Search,Close} from '@mui/icons-material';
import './WakkalaCutomersData.css'
import WakkalaCutomersData from './WakkalaCutomersData';
import WakkalaPopup from './WakkalaAdd';

function WakkalaMain(props) {

  const [crrSearchNumber, setCrrSearchNumber] = useState('');

  const clearInput = () => {
    setCrrSearchNumber('');
  }

  const [CRRnumber, setCRRnumber] = useState([]);

  const [openPopup, setopenPopup] = useState(false)

  const [GetCrrLatest, setGetCrrLatest] = useState(4900);

  const auth= getAuth();

  const navigate = useNavigate();

  const [page, setPage] = useState(null)

  useEffect(() => {

    console.log(GetCrrLatest);
    
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
            placeholder='Enter Cutomer CRR number to search'
            value={crrSearchNumber}
            onChange={(e) => setCrrSearchNumber(e.target.value) }
            list='data'
             />
             <hr />
             <datalist id='data' >
              {
                CRRnumber.map((data,index) => {
                  return(
                    <option> {data.travel_id} </option>
                  )
                } )
              }
             </datalist>
             <div className="SearchIcon">
              {
                crrSearchNumber.length === 0 ? (
                  <Search/>
                ):(
                  <Close id='clearBtn' onClick={clearInput} />
                )
              }
             </div>
           </div>
           <div className="add-button" onClick={() => setopenPopup(true)} >
            <h6>add</h6>
           </div>
          </div>
        </div>
        <div className="CustomerTable">
            <WakkalaCutomersData  setCRRnumber={setCRRnumber} getLatestCrr={setGetCrrLatest} crrLatest={GetCrrLatest}/>
        </div>
      </div>
    </div>
    <WakkalaPopup 
    openPopup={openPopup}
    setopenPopup={setopenPopup}
    LatestCrr={GetCrrLatest}
    />
    </>
  )
}

export default WakkalaMain