import React,{ useState, useEffect } from 'react';

import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
} from '@coreui/react'
import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json'
const server = 'http://127.0.0.1:8000';


class Uinfo extends React.Component{
  constructor() {
    super();
    this.state={
      username:'',
      email:'',
      usertype:'',
      key:''
    }
  }


  componentDidMount(){
    const data = sessionStorage.getItem("key");
    // console.log(data);
    axios.post(`${server}/user/profile/`,{key:data})
      .then(res => {
        console.log(res);
        this.setState({
          username:res.data['username'],
          email:res.data['email'],
          user_type:res.data['user_type']

        })

      })
      .catch(err => console.log(err));


  }

  render() {


    return (
      <CRow alignHorizontal='center'>
        <CCol xs="12" sm="10">
          <CCard>
            <CCardHeader>
              Personal Detail
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="nickname">Username</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="Username-input" defaultValue={this.state.username} disabled={true} readOnly={true}/>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email-input">Email Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="email" id="email-add" defaultValue={this.state.email} disabled={true}/>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="Usertype">Usertype</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="usertype" defaultValue={this.state.user_type} disabled={true}/>
                </CCol>
              </CFormGroup>

            </CCardBody>
          </CCard>

        </CCol>
      </CRow>
    )
  }
}
export default Uinfo;
