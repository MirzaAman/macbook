import React, { useEffect, useState } from 'react'
import fire from '../../../../firebase_DB/firebaseAPI';
import { Table } from 'react-bootstrap';
import MoreEmi from './GetMoreAbtEmi/MoreEmi';

function EmigrationTableView() {

  const [PassengerName, setPassengerName] = useState('')

  const [PassengerContactNumber, setPassengerContactNumber] = useState('')

  const [VisaCountry, setVisaCountry] = useState('')

  const [VisaProfession, setVisaProfession] = useState('')

  const [Price, setPrice] = useState('')

  const [Vendor, setVendor] = useState('')

  const [ProcessingTimeCommited, setProcessingTimeCommited] = useState('')

  const [DateOfCommencement, setDateOfCommencement] = useState('')

  const [Tac, setTac] = useState('')

  const [EmigrationDataTable, setEmigrationDataTable] = useState([])

  const [EmiMore, setEmiMore] = useState(false)

  useEffect(()=>{

    const dataFromDB = fire.database().ref('Emigration')
    dataFromDB.on('value', snapshot => {
      const docs = snapshot.val();
      const data = [];

      for( let id in docs ){

        data.push(docs[id])
        setEmigrationDataTable(data)

      }

    } )

  },[])

  const getMore = (
    psname,
    pscnt,
    vscnty,
    vspro,
    prc,
    vndr,
    ptc,
    dtofcmmnt,
    tc
  ) => {

    setPassengerName(psname)
    setPassengerContactNumber(pscnt)
    setVisaCountry(vscnty)
    setVisaProfession(vspro)
    setPrice(prc)
    setVendor(vndr)
    setProcessingTimeCommited(ptc)
    setDateOfCommencement(dtofcmmnt)
    setTac(tc)

    setEmiMore(true)

  }

  return (
    <>

    <div className="whole">
      <Table>
        <thead>
          <tr>
            <th>PS Name</th>
            <th>Visa pro</th>
            <th>PTC</th>
          </tr>
        </thead>
        <tbody>
          {
            EmigrationDataTable.map((data,index)=> {
              return(
                <tr>
                  <td id='crr'
                  onClick={()=> getMore(
                    data.passengername,
                    data.passengercontactnumber,
                    data.visacountry,
                    data.visaprofession,
                    data.price,
                    data.vendor,
                    data.processingtimecommited,
                    data.dateofcommencement,
                    data.tac
                  )} key={index}
                   > {data.passengername} </td>
                   <td> {data.visaprofession} </td>
                   <td> {data.processingtimecommited} </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>

    <MoreEmi
    EmiMore={EmiMore}
    setEmiMore={setEmiMore}
    passengername={PassengerName}
    passengercontactnumber={PassengerContactNumber}
    visacountry={VisaCountry}
    visaprofession={VisaCountry}
    price={Price}
    vendor={Vendor}
    processingtimecommited={ProcessingTimeCommited}
    dateofcommencement={DateOfCommencement}
    tac={Tac}
     />

    </>
  )
}

export default EmigrationTableView