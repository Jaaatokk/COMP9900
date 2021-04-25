import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow, CDataTable
} from '@coreui/react'

import img from '../img/lion.jpg'
import axios from "axios";
import TheSidebarForAdmin from "./TheSidebarForAdmin";
import TheHeaderForAdmin from "./TheHeaderForAdmin";
import styles from "./View.css"

const server = 'http://127.0.0.1:8000';
const fields = ['book_img','book_name','book_price','book_des']

class ViewProduct_Cont extends React.Component {
  constructor() {
    super();
    this.state = {
      userData:[],
      // uID:'',
      // book_name:'',
      // total_price:'',
      // order_time:'',
      // order_id:'',

    }
  }

  componentDidMount() {
    const userdata =[]
    axios.get(`${server}/item_list/`)
      .then(res => {
        // console.log(res.data.order_list[0].item_list[0]);
        console.log(res.data);
        res.data["data"].forEach((od,no)=>{
          userdata.push({
            no,book_name:od['item_name'],
            book_price:od['item_price'],
            book_des:od['item_des'],
            book_img: 'http://127.0.0.1:8000/media/'+od['item_image']
          });
          console.log(userdata);
          this.setState({
            userData:userdata,
          })
        })

      })
      .catch(err => console.log(err));
  }


  render() {


    return (
      <>
        <CRow alignHorizontal='center'>
          <CCol xs="12" md="10">
            <CCard>
              <CCardHeader>
                View All Product
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      {/*<CRow className="txt"> Name:{this.state.book_name}</CRow>*/}
                      {/*<CRow className="txt"> Price:{this.state.book_price}</CRow>*/}
                      {/*<CRow className="txt"> Description:{this.state.book_des}</CRow>*/}
                      <CDataTable
                        items={this.state.userData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        columnFilter
                        tableFilter
                        itemsPerPageSelect
                        size="sm"
                        itemsPerPage={5}
                        pagination
                        scopedSlots = {{
                          'book_img':
                            (item)=>(
                              <td>
                                <img src={item.book_img} alt="" className='commentImage' ></img>
                              </td>
                            )
                        }}
                      />
                    </CCard>
                  </CCol>
                </CRow>

              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}
export default ViewProduct_Cont
