import SideBar from './SideBar/SideBar';
import MainDash from './MainDash/MainDash';
import './AdminStyle.css';
import React,{useState} from 'react';
import CustomersData from './CustomerReview/CustomersData';
import WakkalaMain from '../Wakkala/WakkalaMain';
import AirTicketMain from '../Air Ticket/AirTicketMain';
import EmigrationMain from '../Emigration/EmigrationMain';
import RecruitmentMain from '../Recruitment/RecruitmentMain';
import TourPackagesMain from '../Tour Packages/TourPackagesMain';
import UmrahMain from '../Umrah/UmrahMain';
import AttestationMain from '../Attestation/AttestationMain';

function AdminPanel() {

  const [word, setWord] = useState('Dashboard');

  let component

  if(word==='Dashboard'){
    component=<MainDash/>
  }else if(word==='Customers'){
    component=<CustomersData />
  }else if(word==='Wakkala'){
    component=<WakkalaMain/>
  }else if(word==='Air Ticket'){
    component=<AirTicketMain/>
  }else if(word==='Emigration'){
    component=<EmigrationMain/>
  }else if(word==='Recruitment'){
    component=<RecruitmentMain/>
  }else if(word==='Tour Packages'){
    component=<TourPackagesMain/>
  }else if(word==='Umrah'){
    component=<UmrahMain/>
  }else if(word==='Attestation'){
    component=<AttestationMain/>
  }

    return (
      <div className="Appw">
        <div className="AppGlass">
          <SideBar changeWord={word => setWord(word)} />
          {component}
        </div>
      </div>
    );
  }
  
  export default AdminPanel;