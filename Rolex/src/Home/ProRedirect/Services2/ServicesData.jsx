import React from 'react'
import DropDown from '../../DropDown/DropDown';

function ServicesData() {

  const services = [
    {id:1, service:"Wakkala"},
    {id:2, service:"AirTicket"},
    {id:3, service:"Emigration"},
    {id:4, service:"Umrah"},
    {id:5, service:"Hajj"},
    {id:6, service:"VisitVisa"},
    {id:7, service:"Attestation"},
    {id:8, service:"TourPackages"},
    {id:9, service:"Recruitment"},
  ]

  return (
    <div className="servicesList">
      <div className="ListServices">
       <DropDown/>
      </div>
    </div>
  )
}

export default ServicesData