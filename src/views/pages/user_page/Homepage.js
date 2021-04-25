import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForUser from "./TheHeaderForUser"
import TheSidebarForUser from "./TheSiderbarForUser";
import {
  CButton
} from '@coreui/react'
import Carousels from "./Carousels";
import ChatBot from "./Chatbot";

const HomePage = () => {


  return (
    <div className="c-app c-default-layout">
      <TheSidebarForUser/>
      <div className="c-wrapper">
        <TheHeaderForUser/>
        <div className="c-body">
          <Carousels/>
          <CButton>
          <a href="http://localhost:63343/coreui-free-react-admin-template-master/src/views/pages/user_page/index.html?_ijt=f05buv75rn90u8t0nuroeqo9r8">ChatBot</a></CButton>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default HomePage
