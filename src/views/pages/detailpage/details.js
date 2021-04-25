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



 class IDetail extends React.Component{
    constructor() {
      super();
      this.state={
        img:'',
        author:'',
        price:'',
        category:'',
        des:'',
        itemName:'',
        key:'',
        success:false
      }
      this.submit = this.submit.bind(this);

    }
  componentDidMount() {
    let url = 'http://127.0.0.1:8000/item/detail/'
    let item_id = sessionStorage.getItem('item_id')
    axios.post(url, {item_id: item_id})
      .then(res => {
        console.log("item_id",item_id)
        // console.log("daole",res.data)
        // console.log("daole2",res.data['categories'][0]['name'])
        this.setState({
          img:'http://127.0.0.1:8000/media/'+res.data['data'][0]['fields']['item_image'],
          author:res.data['authors'][0]['name'],
          category:res.data['categories'][0]['name'],
          des:res.data['data'][0]['fields']['item_des'],
          price:res.data['data'][0]['fields']['item_price'],
          itemName:res.data['data'][0]['fields']['item_name']
        })

      })
  }
  submit() {
    let url2 = 'http://127.0.0.1:8000/cart/add/'
    let key=sessionStorage.getItem('key')
    let item_id = sessionStorage.getItem('item_id')
      axios.post(url2,{key:key,item_id:item_id})
        .then(res => {
          console.log(res)
          this.setState({
            success:!this.state.success
          })
          // this.handleClick = this.handleClick.bind(this)
        })
    }



  render(){

    return (
      <>
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
            <CModalTitle>Add Successful</CModalTitle>
          </CModalHeader>
          {/*<CModalBody>*/}
          {/*  Please select the item before entering the cart.*/}
          {/*</CModalBody>*/}
          {/*<CModalFooter>*/}
          {/*  <CButton color="success" onClick={() => setSuccess(!success)}><Link to="/login">Log in</Link></CButton>{' '}*/}
          <CButton color="success" onClick={() => this.setState({success:!this.state.success})}><Link to='/childrenbook'>Back to Product List</Link></CButton>
          {/*</CModalFooter>*/}
        </CModal>


        <CCard class='intro'>

          <CRow >
            <CCol>
              <CCard >
                <CCardHeader>
                  <h1 className="txt"> Product Details </h1>
                </CCardHeader>
                <CCardBody>
                  <CCol> <CCardImg src={this.state.img} class='photostyle'></CCardImg></CCol>
                  <br></br>
                  <CCol>
                    <CRow > <h2>Name: {this.state.itemName} </h2></CRow>
                    <CRow >  <h2>price:{this.state.price}</h2></CRow>
                    <CRow >  <h2>Author: {this.state.author}</h2></CRow>
                    <CRow >  <h2>Description:{this.state.des}</h2></CRow>
                  </CCol>
                  <br></br>
                  <CButton color="info" block onClick={this.submit}>Add to Cart</CButton>
                </CCardBody>
              </CCard>
            </CCol>



          </CRow>


        </CCard>
            <TheFooter/>
          </div>


        </div>

      </>
    )}
}

export default IDetail;
