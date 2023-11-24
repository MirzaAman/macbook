import React, { useEffect, useState } from 'react';
import fire from '../../../../firebase_DB/firebaseAPI';
import Table from 'react-bootstrap/Table'
import GetMoreAbtAirTckt from './GetMoreAboutAirTckt/GetMoreAbtAirTckt';

function AirTicketTableView() {

    const [PassengerName, setPassengerName] = useState('')

    const [Sector, setSector] = useState('')

    const [PassengerContact, setPassengerContact] = useState('')

    const [Pnr, setPnr] = useState('')

    const [Fare, setFare] = useState('')

    const [Tae, setTae] = useState('')

    const [Vendor, setVendor] = useState('')

    const [AirTciketTable, setAirTciketTable] = useState([])

    const [AirMore, setAirMore] = useState(false)

    useEffect(() => {

        const dataFromDBn = fire.database().ref('AirTicket')
        dataFromDBn.on('value', snapshot => {
            const docsnn = snapshot.val();
            const datan = [];

            for( let id in docsnn ) {
                datan.push(docsnn[id]);

                console.log(datan);
                setAirTciketTable(datan)
            }
        })

    },[])

    const getMore = (
        psname,
        sct,
        pscnt,
        pnr,
        fre,
        tae,
        vndr
    ) => {

        setAirMore(true)
        setPassengerName(psname)
        setSector(sct)
        setPassengerContact(pscnt)
        setPnr(pnr)
        setFare(fre)
        setTae(tae)
        setVendor(vndr)

    }

  return (
    <>

    <div className="whole">
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>PNR</th>
                    <th>PS Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    AirTciketTable.map((data,index) => {
                        return(
                            <tr>
                                <td id='crr' onClick={()=> {getMore(
                                    data.passengername,
                                    data.sector,
                                    data.passengercontact,
                                    data.pnr,
                                    data.fare,
                                    data.tae,
                                    data.vendor,
                                )}} key={index} > {data.pnr} </td>
                                <td> {data.passengername} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </div>

    <GetMoreAbtAirTckt 
    openAirMore={AirMore}
    setOpenAirMore={setAirMore}
    passengername={PassengerName}
    sector={Sector}
    passengercontact={PassengerContact}
    pnr={Pnr}
    fare={Fare}
    tae={Tae}
    vendor={Vendor}
     />

    </>
  )
}

export default AirTicketTableView