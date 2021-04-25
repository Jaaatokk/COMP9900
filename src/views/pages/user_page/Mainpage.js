import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForUserBeforeLogin from "./TheHeaderForUserBeforeLogin";
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CInputGroup,
  CSelect,
  CInput, CCardBody, CRow, CCol, CCard, CCardHeader, CCardImg, CModalHeader, CModalTitle, CModalBody, CModal,
} from '@coreui/react'
import Carousels from "./Carousels";
import img1 from "./tolstoy.jpg";
import img2 from "./Pride.jpg";
import img3 from "./lion.jpg";
import axios from "axios";
import render from "enzyme/src/render";
const server='http://127.0.0.1:8000';

const MainPage =()=>{

  const [search,setSearch]=useState('')
  console.log(search)
  sessionStorage.setItem("search", search);
  const [success,setSuccess]=useState(false)
  const history=useHistory()

  const checkResult =()=>{
    axios.post(`${server}/item/search/`,{search:search})
      .then(res=> {
        if (res.data['status']===false) {
          setSuccess(!success)

        } else {
            history.push({
              pathname:'/searchnr'
           })
        }
      })}





return (
      <div className="c-app c-default-layout">

        <CModal
          show={success}
          onClose={() => setSuccess(!success)}
          color="info"
        >
          <CModalHeader closeButton>
            <CModalTitle>No Result</CModalTitle>
          </CModalHeader>
          <CModalBody>
            Please search again !
          </CModalBody>
          {/*<CModalFooter>*/}
          {/*  <CButton color="success" onClick={() => setSuccess(!success)}><Link to="/login">Log in</Link></CButton>{' '}*/}
          {/*  <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>*/}
          {/*</CModalFooter>*/}
        </CModal>


        <div className="c-wrapper">
          <TheHeaderForUserBeforeLogin/>
          <div className="c-body">
            <CRow>

            <CInputGroup className='textc'>
              <CInput id="input1-group3" name="input1-group3" placeholder="Search" onChange={ e => setSearch(e.target.value) }/>
              <CButton color="info" className="my-2 my-sm-0"  onClick={checkResult} >Search by Author Name</CButton>
            </CInputGroup>
              <CButton type='button' className="button"><a
                href="http://localhost:63342/coreui-free-react-admin-template-master/src/views/pages/user_page/ChatBot.html?_ijt=va3ldn8j0ekgcfkor5ejg8ri3u">Chatbot</a></CButton>
            </CRow>
            {/*<CButton type='button' className="button"><a*/}
            {/*  href="http://localhost:63342/coreui-free-react-admin-template-master/src/views/pages/user_page/ChatBot.html?_ijt=va3ldn8j0ekgcfkor5ejg8ri3u">Chatbot</a></CButton>*/}
            <Carousels/>



          </div>
          <div className="c-app c-default-layout">
            <CCardBody>
              <CCardHeader>  <CIcon name="cib-freecodecamp"  alt="cib-freecodecamp"/>  TOP SALES</CCardHeader>
              <CRow>
                <CCol xs="6" xl="4">
                  <CCard>
                    <CCardBody className='cardbody'>

                        <CCardImg src={img1}></CCardImg>

                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="6" xl="4">
                  <CCard>
                    <CCardBody className='cardbody'>

                        <CCardImg src={img2}></CCardImg>

                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="6" xl="4">
                  <CCard>
                    <CCardBody className='cardbody'>

                        <CCardImg src={img3}></CCardImg>


                    </CCardBody>
                  </CCard>
                </CCol>


              </CRow>


            </CCardBody>
          </div>
          <TheFooter/>
        </div>


      </div>

    )

}

export default MainPage
