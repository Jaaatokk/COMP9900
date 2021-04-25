import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForUser from "./TheHeaderForUser"

import {
  CButton,
  CInputGroup,
  CSelect,
  CInput, CCardBody, CRow, CCol, CCard, CCardHeader, CCardImg, CCardFooter, CPagination,CCarouselControl,
  CCarouselIndicators,CCarouselInner,CCarousel,CContainer,CCarouselCaption,CCarouselItem
} from '@coreui/react'
import Carousels from "./Carousels";
import img from "../booktype/children/lion.jpg";
import axios from "axios";
import styles from './search.css'
import render from "enzyme/src/render";
const server='http://127.0.0.1:8000';


class SearchNameResult extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      userdata:[],
      userItem:[],
      userBoth:[]

    }
  }

  componentDidMount(){
    const search = sessionStorage.getItem("search");
    console.log(search)
    axios.post(`${server}/item/search/`,{search:search})
      .then(res=> {
        console.log(res.data.status)
          console.log(res.data['data_from_items'])
        console.log('111')
          this.setState({
            userdata:res.data['author'],
            userItem:res.data['data_from_items'],
            userBoth:res.data['data_from_author']

            // author:res.data['author'],
            // data_from_items:res.data['data_from_items'],
            // data_from_author:res.data['data_from_author']
          });
          console.log('userdata',this.state.userdata);
        console.log('userboth',this.state.userItem);
        console.log('userdfff',this.state.userBoth);

      })
      .catch(err=>console.log(err));


  }




  render(){

    const  author = this.state.userdata.map((item,no)=>
          <ul key={no}>
            <div>
              <h2>{item.author_name}</h2>
            </div>
          </ul>
    )
    const  item = this.state.userItem.map((item,no)=>
      <ul key={no}>
        <div>
          <h2>{item.item_name} &nbsp; &nbsp; &nbsp; price:{item.item_price}</h2>
          <h2>Description:{item.item_des}</h2>
        </div>
      </ul>
    )

    return (
      <div>
        <CCardHeader>
          Search Result
        </CCardHeader>
        <CCard>Author:{author}</CCard>
        <CCard>Item:{item}</CCard>
      </div>
    )
  }
}
export default SearchNameResult;
