import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CCardImg,
  CCol,
  CRow, CModalHeader, CModalTitle, CModal
} from '@coreui/react'
import TheFooter from "../user_page/TheFooter";
import TheHeaderForUser from "../user_page/TheHeaderForUser"
import TheSidebarForUser from "../user_page/TheSiderbarForUser";
import axios from "axios";
import {Link} from "react-router-dom";



class Re extends React.Component{
  constructor() {
    super();
    this.state={
      name:'',
      norecom:'',
      item:''

    }


  }
  componentDidMount() {
    let url = 'http://127.0.0.1:8000/recommendation/'
    let user_id = sessionStorage.getItem('key')
    axios.post(url, {user_id: user_id})
      .then(res => {
        if (res.data['recommendation']['name']){
          console.log("sbtuijian",res.data['recommendation'])
          this.setState({
            name:res.data['recommendation']['name'],
            item:res.data['recommendation']['item_id']
        })
          sessionStorage.setItem('item_id',this.state.item)
        }else{
          this.setState({
            norecom:res.data['message']
          })

        }
      })
  }
  // detail(){
  //
  //   let url2='http://127.0.0.1:8000/item/detail/'
  //   let item_id=this.state.item
  //   axios.post(url2,{item_id:item_id})
  //   .then(res =>{
  //
  //         console.log('daoda detail',res.data)
  //         sessionStorage.setItem('item_id',item_id)
  //         // sessionStorage.setItem('item_id',res.data.data[no]['item_key'])
  //         // console.log('itemkey',res.data.data[no]['item_key'])
  //       })
  //
  // }




  render(){

    return (
      <div>

        <Link to='/itemrecommend'><CButton >we recommend you to buy  {this.state.name}.</CButton></Link>

            {/*<CModal*/}
            {/*  show={this.state.success}*/}
            {/*  onClose={() => !this.state.success}*/}
            {/*  color="info"*/}
            {/*>*/}

            {/*  <CModalHeader closeButton>*/}
            {/*    <CModalTitle>Add Successful</CModalTitle>*/}
            {/*  </CModalHeader>*/}
            {/*  /!*<CModalBody>*!/*/}
            {/*  /!*  Please select the item before entering the cart.*!/*/}
            {/*  /!*</CModalBody>*!/*/}
            {/*  /!*<CModalFooter>*!/*/}
            {/*  /!*  <CButton color="success" onClick={() => setSuccess(!success)}><Link to="/login">Log in</Link></CButton>{' '}*!/*/}
            {/*  <CButton color="success" onClick={() => this.setState({success:!this.state.success})}><Link to='/childrenbook'>Back to Product List</Link></CButton>*/}
            {/*  /!*</CModalFooter>*!/*/}
            {/*</CModal>*/}


            {/*<CCard class='intro'>*/}

              {/*<CRow >*/}
              {/*  <CCol>*/}
              {/*    <CCard >*/}
              {/*      <CCardHeader>*/}
              {/*        <h1 className="txt"> Product Details </h1>*/}
              {/*      </CCardHeader>*/}
              {/*      <CCardBody>*/}
              {/*        <CCol> <CCardImg src={this.state.img} class='photostyle'></CCardImg></CCol>*/}
              {/*        <br></br>*/}
              {/*        <CCol>*/}
              {/*          <CRow > <h2>Name: {this.state.itemName} </h2></CRow>*/}
              {/*          <CRow >  <h2>price:{this.state.price}</h2></CRow>*/}
              {/*          <CRow >  <h2>Author: {this.state.author}</h2></CRow>*/}
              {/*          <CRow >  <h2>Description:{this.state.des}</h2></CRow>*/}
              {/*        </CCol>*/}
              {/*        <br></br>*/}
              {/*        <CButton color="info" block onClick={this.submit}>Add to Cart</CButton>*/}
              {/*      </CCardBody>*/}
              {/*    </CCard>*/}
              {/*  </CCol>*/}



              {/*</CRow>*/}


            {/*</CCard>*/}



      </div>
    )}
}

export default Re;
