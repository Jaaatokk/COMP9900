import React,{ useState, useEffect } from 'react';

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
import axios from 'axios'
import styles from './order.css'
import {useHistory} from "react-router-dom";
const server = 'http://127.0.0.1:8000';



class Order extends React.Component{
  constructor() {
    super();
    this.state={
      book_name:'',
      book_price:'',
      book_decr:'',
    }
  }
  componentDidMount() {
    sessionStorage.getItem('key',)
    axios.get(`${server}/order/show_all`)
      .then(res=>{
        console.log(res.data.data[0]);
        this.setState({
          book_name:res.data.data[0].book_name,
          book_price:res.data.data[1].book_price,
          book_decr:res.data.data[2].book_decr,
        })
      })
      .catch(err=>console.log(err));
  }
}
  render()
{
  return (
    <>
      <CRow alignHorizontal='center'>
        <CCol xs="12" sm="10">
          <CCard>
            <CCardHeader className="txt">
              Personal Order
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel className="txt1">Username</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="Username-input" defaultValue="11111" disabled={false} readOnly={true}/>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel className="txt1">Bookname</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="Username-input" defaultValue="11111" disabled={false} readOnly={true}/>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel className="txt1">Price</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="Username-input" defaultValue="11111" disabled={false} readOnly={true}/>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel className="txt1">Time</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="Username-input" defaultValue="11111" disabled={false} readOnly={true}/>
                </CCol>
              </CFormGroup>

            </CCardBody>
          </CCard>

        </CCol>
      </CRow>
    </>
  )
}

export default Order;
