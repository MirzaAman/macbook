import React, { useEffect, useState } from 'react'
import fire from '../../../../firebase_DB/firebaseAPI';
import { Table } from 'react-bootstrap';
import MoreData from './MoreData';

function RecruitmentDataTableView() {

  const [CandidateName, setCandidateName] = useState('');

  const [Job, setJob] = useState('');

  const [Country, setCountry] = useState('');

  const [Profession, setProfession] = useState('');

  const [Experience, setExperience] = useState('');

  const [Qualification, setQualification] = useState('');

  const [Price, setPrice] = useState('');

  const [RecruitmentDataTable, setRecruitmentDataTable] = useState([]);

  const [MorePopup, setMorePopup] = useState(false);

  useEffect(()=>{
    const dataFromDb = fire.database().ref('Recruitment')
    dataFromDb.on('value', snapshot => {
      const docs = snapshot.val();
      const data = [];

      for( let id in docs ){

        data.push(docs[id])
        setRecruitmentDataTable(data)

      }

    } )
  },[])

  const getMore = (
    cdname,
    jb,
    cnt,
    pro,
    exp,
    ql,
    pr
  ) => {

    setCandidateName(cdname)
    setJob(jb)
    setCountry(cnt)
    setProfession(pro)
    setExperience(exp)
    setQualification(ql)
    setPrice(pr)

    setMorePopup(true)

  } 



  return (
    <>

    <div className="whole">
      <Table>
        <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Job</th>
            </tr>
        </thead>
        <tbody>
          {
            RecruitmentDataTable.map((data,index)=>{
              return(
                <tr>
                  <td id='crr' onClick={()=>getMore(
                    data.candidatename,
                    data.job,
                    data.country,
                    data.profession,
                    data.experience,
                    data.qualification,
                    data.price
                  )} key={index} > {data.candidatename} </td>
                  <td> {data.job} </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>

    <MoreData
    open={MorePopup}
    setOpen={setMorePopup}
    cdname={CandidateName}
    jb={Job}
    cnt={Country}
    pro={Profession}
    exp={Experience}
    ql={Qualification}
    pr={Price}
    />

    </>
  )
}

export default RecruitmentDataTableView