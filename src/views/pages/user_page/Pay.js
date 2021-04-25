import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter, CDataTable,CLink
} from '@coreui/react'
import axios from 'axios'
import TheFooter from "./TheFooter";
import TheHeaderForUser from "./TheHeaderForUser"
import TheSidebarForUser from "./TheSiderbarForUser";

const server = 'http://127.0.0.1:8000';



class ReadyPay extends React.Component {
  constructor() {
    super();
    this.state = {
      price:'',
      success:false
    }
    this.pay = this.pay.bind(this);
  }
  componentDidMount() {
    const key=sessionStorage.getItem('key')
    // const data11=sessionStorage.getItem('data')
    // const read=JSON.parse(sessionStorage.getItem('data'));
    const order_id=sessionStorage.getItem('order_id')
    const if_success='1'
    console.log("look",order_id)
    axios.post(`${server}/order/pay/`,{key:key,order_id:order_id,if_success:if_success})
      .then(res=>{
        console.log("kan jia",res.data['price'])
        this.setState({
          price:res.data['price'],
        })
      })
      .catch(err=>console.log(err))
  }


  pay(){
    console.log('abcdef')
    const key=sessionStorage.getItem('key')
    // const data11=sessionStorage.getItem('data')
    // const read=JSON.parse(sessionStorage.getItem('data'));
    const order_id=sessionStorage.getItem('order_id')
    const if_success='1'
    console.log("look",order_id)
    axios.post(`${server}/order/pay/`,{key:key,order_id:order_id,if_success:if_success})
      .then(res=>{
        console.log("kan jia",res)
        this.setState({
          price:res.data['price'],
          success:!this.state.success
        })
      })
      .catch(err=>console.log(err))
  }


  // componentDidMount() {
  //   console.log('abcdef')
  //   const key=sessionStorage.getItem('key')
  //   // const data11=sessionStorage.getItem('data')
  //   // const read=JSON.parse(sessionStorage.getItem('data'));
  //   const order_id=sessionStorage.getItem('order_id')
  //   const if_success='1'
  //   console.log("look",order_id)
  //   axios.post(`${server}/order/pay/`,{key:key,order_id:order_id,if_success:if_success})
  //     .then(res=>{
  //       console.log(res)
  //     })
  //     .catch(err=>console.log(err))
  //
  // }

  // sendCheck(){
  //   const key=sessionStorage.getItem('key')
  //   axios.post(`${server}/order/create/`,{data:this.state.readypay,key:key})
  //     .then(res=>{
  //
  //     })
  // }



  render() {

    return(
      <div className="c-app c-default-layout">
        <TheSidebarForUser/>
        <div className="c-wrapper">
          <TheHeaderForUser/>
        <CModal
          show={this.state.success}
          onClose={() => !this.state.success}
          color="info"
        >
          <CModalHeader closeButton>
            <CModalTitle>This order has paid successful</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CLink to='/childrenbook'><CButton>Back to homepage</CButton></CLink>
          </CModalBody>
          {/*<CModalFooter>*/}
          {/*  <CButton color="success" onClick={() => setSuccess(!success)}><Link to="/login">Log in</Link></CButton>{' '}*/}
          {/*  <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>*/}
          {/*</CModalFooter>*/}
        </CModal>



        <CRow alignHorizontal='center'>
          <CCol xs="12" md="10">
            <CCard>
              <CCardHeader >
                Confirm your order and pay immediately?
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>
                        Your order total price is $ {this.state.price}.
                      </CCardHeader>
                      <CCardBody>
                        <CRow>
                        <CCol><CButton onClick={this.pay} color="info">Pay Now</CButton></CCol>
                        <CCol><CLink to='/ohistory'><CButton color="info"  >Consider later</CButton></CLink></CCol>
                        </CRow>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>

              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

          <TheFooter/>
      </div>


  </div>

    )
  }

}


export default ReadyPay;
