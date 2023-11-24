import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import './test.css'
import fire from '../../../../firebase_DB/firebaseAPI';
import Add from './Test/Add';
import More from './Read/More';

function Test() {

  const [Batch, setBatch] = useState('');

  const [Ameer, setAmeer] = useState('');

  const [Title, setTitle] = useState('');

  const [PaxSurName, setPaxSurName] = useState('');

  const [PaxGivenName, setPaxGivenName] = useState('');

  const [PassportNo, setPassportNo] = useState('');

  const [DOB, setDOB] = useState('');

  const [POI, setPOI] = useState('');

  const [DoI, setDoI] = useState('');

  const [DoE, setDoE] = useState('');

  const [ContactNumber, setContactNumber] = useState('');
  
  const [DataView, setDataView] = useState([]);

  const [AddPopup, setAddPopup] = useState(false);

  const [MorePopup, setMorePopup] = useState(false)

  useEffect(()=>{
    const dataFromDb = fire.database().ref('batch1')
    dataFromDb.on('value',snapshot=>{
      const docs= snapshot.val();
      const data = [];
      for(let id in docs){
        data.push(docs[id])
        setDataView(data)
      }
    })
  })

  const moreOpen = (
    ttle,
    pxsrnm,
    pxgvnm,
    psprt,
    db,
    poi,
    doi,
    doe,
    cntno
  ) => {

    setTitle(ttle)
    setPaxSurName(pxsrnm)
    setPaxGivenName(pxgvnm)
    setPassportNo(psprt)
    setDOB(db)
    setPOI(poi)
    setDoI(doi)
    setDoE(doe)
    setContactNumber(cntno)

    setMorePopup(true)

  }

  return (
    <>

<div className="table-container">
      <div className="SearchInputss">
              <h1 className="headings"> Batch No 1 </h1>
               <div className="add-button" onClick={()=>setAddPopup(true)} >
                <h6>
                  Add
                </h6>
               </div>
            </div>
      <table className="tablce">
        <thead>
          <tr>
            <th>No.</th>
            <th>Pax title</th>
            <th>Pax surname</th>
          </tr>
        </thead>
        <tbody>
          {
            DataView.map((data,index)=>{
              return(
                <tr>
            <td data-label='No.' >{index+1}</td>
            <td data-label='Pax title' id='crr' onClick={()=>moreOpen(
              data.Title,
              data.PaxSurName,
              data.PaxGivenName,
              data.PassporNo,
              data.DOB,
              data.POI,
              data.DoI,
              data.DoE,
              data.ContactNumber
            )} >{data.Title}</td>
            <td data-label='Pax surname' >{data.PaxSurName}</td> 
          </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

    <More
    open={MorePopup}
    setOpen={setMorePopup}
    title={Title}
    surname={PaxSurName}
    givenname={PaxGivenName}
    passport={PassportNo}
    dob={DOB}
    poi={POI}
    doi={DoI}
    doe={DoE}
    number={ContactNumber}
    />

    <Add
    open={AddPopup}
    setOpen={setAddPopup}
     />

    </>
  )
}

export default Test