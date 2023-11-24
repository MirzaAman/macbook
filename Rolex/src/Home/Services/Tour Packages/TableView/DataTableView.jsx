import React, { useEffect, useState } from 'react'
import fire from '../../../../firebase_DB/firebaseAPI';
import { Table } from 'react-bootstrap';
import MorePopup from './MorePopup';

function DataTableView() {

  const [TourName, setTourName] = useState('');

  const [TourPeriod, setTourPeriod] = useState('');

  const [PaxName, setPaxName] = useState('');

  const [PaxContactNumber, setPaxContactNumber] = useState('');

  const [Vendor, setVendor] = useState('');

  const [Price, setPrice] = useState('');

  const [Tac, setTac] = useState('');

  const [DataView, setDataView] = useState([])

  const [OpenMorePopup, setOpenMorePopup] = useState(false)


  useEffect(()=>{
    const dataFromDb = fire.database().ref("TourPackage")
    dataFromDb.on('value', snapshot =>{
      const docs = snapshot.val()
      const data = [];

      for( let id in docs ){
        data.push(docs[id])
        setDataView(data)
      }

    } )
  },[])

  const getMore = (
    trname,
    trprd,
    pxnm,
    pxcntno,
    vndr,
    pr,
    tac
  ) => {
    setTourName(trname)
    setTourPeriod(trprd)
    setPaxName(pxnm)
    setPaxContactNumber(pxcntno)
    setVendor(vndr)
    setPrice(pr)
    setTac(tac)

    setOpenMorePopup(true)
  }

  return (
    <>

    <div className="whole">
      <Table>
        <thead>
          <tr>
            <th>Tour Name</th>
            <th>Pax name</th>
            <th>Tour Period</th>
          </tr>
        </thead>
        <tbody>
          {
            DataView.map((data,index) =>{
              return(
                <tr>
                  <td id='crr' onClick={()=>getMore(
                    data.TourName,
                    data.TourPeriod,
                    data.PaxName,
                    data.PaxContactNumber,
                    data.Vendor,
                    data.Price,
                    data.Tac
                  )} key={index} > {data.TourName} </td>
                  <td> {data.PaxName} </td>
                  <td> {data.TourPeriod} </td>
                </tr>
              )
            } )
          }
        </tbody>
      </Table>
    </div>

    <MorePopup
    open={OpenMorePopup}
    setOpen={setOpenMorePopup}
    TourName={TourName}
    TourPeriod={TourPeriod}
    PaxName={PaxName}
    PaxContactNumber={PaxContactNumber}
    Vendor={Vendor}
    Price={Price}
    Tac={Tac}
     />

    </>
  )
}

export default DataTableView