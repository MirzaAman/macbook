import React,{useState} from 'react'
import './Dropdown.css'
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom';
import fire from '../../firebase_DB/firebaseAPI';

function DropDown() {

    const [isActive, setActive] = useState('')

    const navigate = useNavigate();

    const services =[
        {id:1, item: 'Wakkala'},
        {id:2, item: 'AirTicket'},
        {id:3, item: 'Emigration'},
        {id:4, item: 'Umrah'},
        {id:5, item: 'Hajj'},
        {id:6, item: 'VisitVisa'},
        {id:7, item: 'Attestation'},
        {id:8, item: 'TourPackages'},
        {id:9, item: 'Recruitment'},
    ]

  return (
   <div className="container">
     <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setActive(!isActive)} >Choose One <span class="material-symbols-outlined">expand_more</span></div>
        {isActive && (
        <div className="dropdown-content">
            {
                services.map((items)=>{
                    return(
                        <div className="dropdown-item" onClick={()=>navigate(`${'/',items.item}`)} > {items.item} </div>
                    )
                })
            }
        </div>
        ) }
    </div>
   </div>
  )
}

export default DropDown