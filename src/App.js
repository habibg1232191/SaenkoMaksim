import { Element } from "react-scroll";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/HeaderC/Header";

import { MyInfo } from "./pages/MyInfoPage/MyInfo";
import { Services } from "./pages/ServicesPage/Services";
import { CONSULTATION_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, MYINFO_ROUTE, SERVICES_ROUTE } from "./utils/constants";
import { WorkE } from "./pages/workExperience/workExp";
import { Consultation } from "./pages/AppointmentConsultation/Consultation";
import { Contacts } from "./pages/ContactsPage/Contacts";
import "./index.css"
import { Modal } from "./components/ModalWindow/Modal";
import { useSelector } from "react-redux";
import React from "react";
import { ModalView } from "./components/ModalView/ModalV";

function App() {

  const {OpenModal,ModalViewOpen} = useSelector(state => state.Cons)

  React.useEffect(() => {
    if(OpenModal){
        document.body.style.overflowY = "hidden"   
    }
    else{
        document.body.style.overflowY = "scroll"
    }
  },[OpenModal,ModalViewOpen]);

  return (
    <div style = {{position:"relative"}}> 

      {OpenModal ? <Modal/> : ModalViewOpen ? undefined : <Header/> }

      <Element name = {MAIN_ROUTE}>
        <WorkE/> 
      </Element> 
      
      <Element name = {SERVICES_ROUTE}>
        <Services/>
      </Element>

      <Element name = {MYINFO_ROUTE}>
        <MyInfo/>
      </Element>

      <Element name = {CONSULTATION_ROUTE}>
        <Consultation />
      </Element>

      <Element name = {CONTACTS_ROUTE}>
        <Contacts/>
      </Element>
  
    </div>
  );
}

export default App;
