import React, { useEffect, useState } from 'react'
import fire from '../../../../firebase_DB/firebaseAPI';
import { Table } from 'react-bootstrap';
import Test from './test';
import MoreId from './MoreId';

import {Link} from 'react-router-dom';

function TableView() {

  const [Batch, setBatch] = useState('1');

  const [Ameer, setAmeer] = useState('');

  const [DateOfTravel, setDateOfTravel] = useState('');
   
  const [DateOfReturn, setDateOfReturn] = useState('');

  const [HotelInMakkah, setHotelInMakkah] = useState('');

  const [HotelInMadeena, setHotelInMadeena] = useState('');

  const [DataTable, setDataTable] = useState([]);

  const [Tests, setTests] = useState(false);

  const [MoreIdPopup, setMoreIdPopup] = useState(false)

  useEffect(()=>{
    const dataFromDb = fire.database().ref("UmrahBatches")
    dataFromDb.on("value", snapshot=>{
      const docs = snapshot.val();
      const data = [];

      for ( let id in docs ) {
        data.push(docs[id])
        setDataTable(data)
      }

    })
  },[])

  const openIdUmrah = (
    batch,
    ameer,
    dot,
    dor,
    htinmkk,
    htinmdeena
  ) => {

    setMoreIdPopup(true)

    setBatch(batch)
    setAmeer(ameer)
    setDateOfTravel(dot)
    setDateOfReturn(dor)
    setHotelInMakkah(htinmkk)
    setHotelInMadeena(htinmdeena)

  }

  return (
    <>
      <div className="whole">
      <Table>
        <thead>
          <tr>
            <th>Batch No:</th>
            <th>Ameer</th>
            <th>Date of travel</th>
          </tr>
        </thead>
        <tbody>
          {
            DataTable.map((data,index)=>{
              const dd = data.Batch
              return(
                <tr>
                  <Link to='/Test'> <td > {data.Batch} </td> </Link>
                  <td id='crr' onClick={()=>openIdUmrah(
                    data.Batch,
                    data.Ameer,
                    data.DateOfTravel,
                    data.DateOfReturn,
                    data.HotelInMakkah,
                    data.HotelInMadeena
                  )} > {data.Ameer} </td>
                  <td> {data.DateOfTravel} </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>

    <MoreId
    open={MoreIdPopup}
    setOpen={setMoreIdPopup}
    batch={Batch}
    ameer={Ameer}
    dot={DateOfTravel}
    dor={DateOfReturn}
    hotelinmakka={HotelInMakkah}
    hotelinmadeena={HotelInMadeena}
    />

    </>
  )
}

export default TableView