import React, { useState } from 'react'
import { Link ,useHistory } from 'react-router-dom'
import {
  CCardHeader,
  CButton,
  CCardBody,
  CContainer, CFooter, CModal, CModalHeader, CModalTitle, CCol, CCard, CRow, CDataTable,CFormGroup
} from '@coreui/react'
import axios from 'axios'
import TheFooter from "../user_page/TheFooter";
import TheHeaderForUser from "../user_page/TheHeaderForUser"
import TheSidebarForUser from "../user_page/TheSiderbarForUser";
const server = 'http://127.0.0.1:8000';

class CartTest extends React.Component {
  constructor() {
    super();
    this.state = {
      checklist:[],
      abc:[],
      tips:'',
      success_clear:false
    }
    this.sendCheck=this.sendCheck.bind(this)
  }



  componentDidMount() {

    const key=sessionStorage.getItem('key')
    axios.post(`${server}/cart/show/`,{key:key})
      .then(res=>{
        // console.log(res.data)

        this.setState({
          checklist:res.data['data']

        })
        if (res.data['data']===null) {
          this.setState({
            tips:res.data['message']
          })
          // this.setState({
          //   length:this.state.checklist.length
          // })
          this.history.push(
            {
              pathname:'/homepage'
            }
          )
          // console.log("tiao?")
        }



        // console.log("2",this.state.checklist)
        //
        sessionStorage.setItem('data',JSON.stringify(this.state.checklist))
        // sessionStorage.setItem('num',this.state.length)

        // sessionStorage.setItem('data',this.state.checklist)
        // console.log("zhege",res.data['data'])
        // console.log('check',this.state.checklist)
        // console.log("111",res.data)
      })
      .catch(err=>console.log(err))
  }
  remove(){
    let url='http://127.0.0.1:8000/cart/remove/'
    const key=sessionStorage.getItem('key')
    const item_id=sessionStorage.getItem('item_id')
    axios.post(url,{key:key,item_id:item_id})
      .then(res=>{
        console.log("remove",res)
      })
  }

  // clear(){
  //   let url='http://127.0.0.1:8000/cart/clear/'
  //   const key=sessionStorage.getItem('key')
  //   axios.post(url,{key:key})
  //     .then(res=>{
  //       // console.log("clear",res)
  //       this.setState({
  //         success_clear:!this.state.success_clear
  //       })
  //     })
  // }



  sendCheck(){

    const key=sessionStorage.getItem('key')
    // const ab=sessionStorage.getItem('data')
    const read=JSON.parse(sessionStorage.getItem('data'));
    console.log("qian",read)

    // const order_id=sessionStorage.setItem('order_id',this.state)
    // console.log("ssss")
    // console.log("ssss",this.state.checklist)
    axios.post(`${server}/order/create/`,{data:read,key:key})
      // console.log("zheli",this.state.checklist)
      .then(res=>{

        // console.log("RRRRR",res)
        console.log(this.state.checklist.length)
        sessionStorage.setItem('order_id',res.data['order_id'])
        sessionStorage.setItem('num',this.state.checklist.length.toString())
        console.log(sessionStorage.getItem('num'))

      })
  }
  render() {


    // const  checkcontent = this.state.checklist.map((item,no)=>
    //   <CFormGroup key={no}>
    //     <div>
    //
    //       <CRow> name:{item['name']}   &nbsp;  &nbsp;  &nbsp;  &nbsp;      $ {item['price']} </CRow>
    //
    //
    //     </div>
    //   </CFormGroup>
    // )
    return(

        <div className="c-app c-default-layout">
        <TheSidebarForUser/>
        <div className="c-wrapper">
        <TheHeaderForUser/>
            <div className="c-body">
              <CRow alignHorizontal='center'>
                <CCol xs="12" md="10">
            <CCard>
              <CCardHeader>
                You Cart now have this items
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    Your cart is empty!
                    <CCardBody>
                      {/*{checkcontent}*/}

                    </CCardBody>
                  </CCol>
                </CRow>

              </CCardBody>
              <CFooter>
                <Link to='/childrenbook'><CButton class='success' type='button' > Back to add book</CButton></Link>
                {/*<Link to='/childrenbook'><CButton class='success' type='button' > Not Now</CButton></Link>*/}
              </CFooter>
            </CCard>
          </CCol>

        </CRow>

            </div>

          <TheFooter/>
        </div>
        </div>



    )
  }

}


export default CartTest;
