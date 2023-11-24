import React, { useEffect, useState } from 'react'
import fire from '../../../../firebase_DB/firebaseAPI';
import { Table } from 'react-bootstrap';
import MoreAttest from './MoreAttest';

function AttesDataTableView() {

  const [PassengerName, setPassengerName] = useState('');

  const [ContactNumber, setContactNumber] = useState('');

  const [Cirtificate, setCirtificate] = useState('');

  const [EmbassyOrConculate, setEmbassyOrConculate] = useState('');

  const [Procedure, setProcedure] = useState('');

  const [Price, setPrice] = useState('');

  const [Vendor, setVendor] = useState('');

  const [Tac, setTac] = useState('');

  const [ProcessingTime, setProcessingTime] = useState('');

  const [AttestationDataTable, setAttestationDataTable] = useState([])

  const [MorePopup, setMorePopup] = useState(false);

  useEffect(()=>{
    const dataFromDb = fire.database().ref('Attestation')
    dataFromDb.on('value', snapshot => {
      const docs = snapshot.val();
      const data = [];

      for( let id in docs ){

        data.push(docs[id])
        setAttestationDataTable(data)

      }

    })
  },[])

  const getMore = (
    psname,
    cnt,
    crtct,
    embsorcnlte,
    prcdr,
    pr,
    vndr,
    tc,
    prtm
  ) =>{

    setPassengerName(psname)
    setContactNumber(cnt)
    setCirtificate(crtct)
    setEmbassyOrConculate(embsorcnlte)
    setProcedure(prcdr)
    setPrice(pr)
    setVendor(vndr)
    setTac(tc)
    setProcessingTime(prtm)

    setMorePopup(true)

  }

  return (
    <>

    <div className="whole">
      <Table>
        <thead>
          <tr>
            <th>Pax Name</th>
            <th>Contact number</th>
          </tr>
        </thead>
        <tbody>
          {
            AttestationDataTable.map((data,index) => {
              return(
                <tr>
                  <td id='crr' onClick={()=>getMore(
                    data.passengername,
                    data.contactnumber,
                    data.cirtificate,
                    data.embassyorconculate,
                    data.procedure,
                    data.price,
                    data.vendor,
                    data.tac,
                    data.processingtime
                  )} key={index} > {data.passengername} </td>
                  <td> {data.contactnumber} </td>
                </tr>
              )
            } )
          }
        </tbody>
      </Table>
    </div>

    <MoreAttest
    openMorePopup={MorePopup}
    setOpenMorePopup={setMorePopup}
    passengername={PassengerName}
    contactnumber={ContactNumber}
    cirtificate={Cirtificate}
    embassyorconculate={EmbassyOrConculate}
    procedure={Procedure}
    price={Price}
    vendor={Vendor}
    tac={Tac}
    processingtime={ProcessingTime}
    />

    </>
  )
}

export default AttesDataTableView