import fire from '../../../../firebase_DB/firebaseAPI';
import React,{useState,useEffect} from 'react';
import {ref,onValue} from 'firebase/compat/database';
import Table from 'react-bootstrap/Table';
import './CustomerTable.css';
import CustomersData from './CustomersData';


function CustomersTable(props) {

    const [CostomerDataTable, setCostomerData] = useState([])

useEffect(() => {

  const dataFromDB = fire.database().ref('Customers')
  dataFromDB.on('value', snapshot => {
    const docs = snapshot.val();
    const data = [];

    for (let id in docs){
      data.push(docs[id]);
    }

    console.log(data);
    setCostomerData(data);

    props.setCRRnumber(data)

  })
}, [])

    return(
        <div className="whole">
            <Table striped bordered hover>
        <thead>
        <tr> 
          <th>No.</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
            CostomerDataTable.map((data,index) => {
                return(
                <tr>
                    <td> {index+1} </td>
                    <td> {data.name} </td>
                 </tr>
                )
            })
        }
      </tbody>
    </Table>
        </div>
    );
}

export default CustomersTable;