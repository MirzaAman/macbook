import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import fire from '../../../firebase_DB/firebaseAPI';
import GetMore from './GetMoreAboutId/GetMore';

function WakkalaCutomersData(props) {

    const [WakkalaCutomerDataTable, setWakkalaCutomerDataTable] = useState([])

    const [crrLatestGetNumberf, setGetCrrLatestGetNumber] = useState(Number);

    const [ID, setID] = useState('');

    const [Dob, setDob] = useState('');

    const [PassportNumber, setPassportNumber] = useState('')

    const [PlaceOfIssue, setPlaceOfIssue] = useState('')

    const [DoI, setDoI] = useState('');

    const [DoE, setDoE] = useState('');

    const [ContactNumber, setContactNumber] = useState('')

    const [WhatsappNumber, setWhatsappNumber] = useState('')

    const [SponsorContact, setSponsorContact] = useState('')

    const [VisaNumber, setVisaNumber] = useState('')

    const [VisaDate, setVisaDate] = useState('')

    const [SponsorIdNumber, setSponsorIdNumber] = useState('')

    const [Profession, setProfession] = useState('')

    const [VisaReference, setVisaReference] = useState('')

    const [MofaNumber, setMofaNumber] = useState('');

    const [MofaDate, setMofaDate] = useState('');

    const [MedicalCenter, setMedicalCenter] = useState('');

    const [MedicalDate, setMedicalDate] = useState('');

    const [FileNumber, setFileNumber] = useState('');

    const [Remarks, setRemarks] = useState('')

    const [MoreCrr, setMoreCrr] = useState('')

    const [UserID, setUserID] = useState('')

    const [openMore, setOpenMore] = useState(false)

    useEffect(() => {

      const dataFromDB = fire.database().ref('Wakkala')
      dataFromDB.on('value',snapshot => {
        const docs = snapshot.val();
        const data = [];

        for ( let id in docs ) {
          data.push({id, ...docs[id]});
        }

        console.log(data);
        setWakkalaCutomerDataTable(data)

        props.setCRRnumber(WakkalaCutomerDataTable)
        const crrLatestGet = data[data.length - 1].crr
        const LatestCrr = parseInt(crrLatestGet)+1;
        props.getLatestCrr(LatestCrr)
        console.log(LatestCrr);

      } )

    },[])

    const getMore = (
      crr,
      name,
      pass,
      dob,
      pofiss,
      doi,
      doe,
      cntno,
      whtno,
      spctno,
      vssno,
      vsdt,
      spidno,
      pro,
      vsref,
      rm,
      id,
      mfno,
      mfdt,
      medcnt,
      meddt,
      flno
      ) => {
      setOpenMore(true)
      setMoreCrr(crr)
      setID(name)
      setPassportNumber(pass)
      setDob(dob)
      setPlaceOfIssue(pofiss)
      setContactNumber(cntno)
      setWhatsappNumber(whtno)
      setSponsorContact(spctno)
      setVisaNumber(vssno)
      setVisaDate(vsdt)
      setSponsorIdNumber(spidno)
      setProfession(pro)
      setVisaReference(vsref)
      setRemarks(rm)
      setUserID(id)
      setDoI(doi)
      setDoE(doe)
      setMofaNumber(mfno)
      setMofaDate(mfdt)
      setMedicalCenter(medcnt)
      setMedicalDate(meddt)
      setFileNumber(flno)
      
    }

  return (WakkalaCutomerDataTable.map((data,index) =>{
    return(
      <>
      <div className="whole">
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>CRR</th>
            <th>Sur name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
              {
                WakkalaCutomerDataTable.map((okk,index)=>{
                  return(
                  <tr>
                  <td id='crr' onClick={() => {getMore(
                    okk.crr,
                    okk.surname,
                    okk.passportnumber,
                    okk.dob, 
                    okk.placeofIssue,
                    okk.doi,
                    okk.doe,
                    okk.contactnumber, 
                    okk.whatsappnumber, 
                    okk.sponsorcontactnumber, 
                    okk.visanumber, 
                    okk.visadate, 
                    okk.sponsoridnumber,
                    okk.profession,
                    okk.visareference,
                    okk.remarks,
                    okk.id,
                    okk.mofanumber,
                    okk.mofadate,
                    okk.medicalcenter,
                    okk.medicaldate,
                    okk.filenumber
                    )}} key={index} > {okk.crr}  </td>
                  <td> {okk.surname} </td>
                  <td> {okk.remarks} </td>
                </tr>
                  )
                })
              }
        </tbody> 
      </Table>
    </div>
    <GetMore 
    openMore={openMore}
    setOpenMore={setOpenMore}
    crr={MoreCrr}
    iduser={ID}
    passportnumber={PassportNumber}
    userdob={Dob}
    placeofissue={PlaceOfIssue}
    doi={DoI}
    doe={DoE}
    contactnumber={ContactNumber}
    whatsappnumber={WhatsappNumber}
    sponsorcontactnumber={SponsorContact}
    visanumber={VisaNumber}
    visadate={VisaDate}
    sponsoridnumber={SponsorIdNumber}
    profession={Profession}
    visareference={VisaReference}
    remarks={Remarks}
    useridorigin={UserID}
    mofanumber={MofaNumber}
    mofadate={MofaDate}
    medicalcenter={MedicalCenter}
    medicaldate={MedicalDate}
    filenumber={FileNumber}
     />
    </>
    );
  } )
  )
}

export default WakkalaCutomersData