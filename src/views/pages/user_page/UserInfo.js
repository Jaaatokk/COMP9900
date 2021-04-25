import React,{ useState, useEffect } from 'react';
// import url from '../../api/url';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
} from '@coreui/react'
import TheSidebarForUser from "./TheSiderbarForUser";
import TheHeaderForUser from "./TheHeaderForUser";
import TheFooter from "./TheFooter";
import Uinfo from "./Uinfo";
import axios from 'axios'


const UserInfo = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebarForUser/>
      <div className="c-wrapper">
        <TheHeaderForUser/>
        <div className="c-body">
          <Uinfo/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )


}

export default UserInfo;
