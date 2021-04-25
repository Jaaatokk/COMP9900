import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CPagination,
  CCardFooter,
  CCardImg,
  CCol,
  CRow,
  CImg, CButton, CModalHeader, CModalTitle, CModalBody, CModal
} from '@coreui/react'



import img from '../img/lion.jpg'
import axios from "axios"
import styles from "./children.css"

const server = 'http://127.0.0.1:8000';

class Children extends React.Component {
  // const [isOpen, setIsOpen] = useState(false)
  // // const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  constructor() {
    super();
    this.state={
      userdata:[],
      item_id:'',
      key:'',
      success:false,

    }
  }
  componentDidMount(){
    let content = null

    axios.get(`${server}/item_list`)
      .then(res => {
        // console.log("11",res.data.data[0]['item_key']);
        this.setState({
          userdata:res.data['data']
        })
      })
      .catch(err => console.log(err));

  }

  submit(no) {
    let url2 = 'http://127.0.0.1:8000/cart/add/'
    let url1 = 'http://127.0.0.1:8000/item_list'
    axios.get(url1)
      .then(res => {
        // console.log('get item key',res.data.data[no]['item_key'])
        sessionStorage.setItem('item_id', res.data.data[no]['item_key'])
        this.setState({
          item_id: res.data.data[no]['item_key'],
          key: sessionStorage.getItem('key')
        })

        console.log('double check item id', this.state.item_id)

      }).then(res => {
      axios.post(url2, {key: this.state.key, item_id: this.state.item_id})
        .then(res => {
          this.setState({
            success: !this.state.success
          })
          console.log('add successful')
          // sessionStorage.setItem('item_id',res.data.data[no]['item_key'])
          // console.log('itemkey',res.data.data[no]['item_key'])
        })
    })
  }

  detail(no){
    let url1 = 'http://127.0.0.1:8000/item_list'
    let url2='http://127.0.0.1:8000/item/detail/'
    let item_id=sessionStorage.getItem('item_id')
    axios.get(url1)
      .then(res => {
        // console.log('get item key',res.data.data[no]['item_key'])
        sessionStorage.setItem('item_id', res.data.data[no]['item_key'])
        this.setState({
          item_id: res.data.data[no]['item_key'],
          key: sessionStorage.getItem('key')
        })

        console.log('detail get item id', this.state.item_id)

      }).then(res => {
      axios.post(url2, {item_id: this.state.item_id})
        .then(res => {
          console.log('daoda detail')
          // sessionStorage.setItem('item_id',res.data.data[no]['item_key'])
          // console.log('itemkey',res.data.data[no]['item_key'])
        })
    })
  }

  // detail(){
  //   let url='http://127.0.0.1:8000/item/detail/'
  //   let item_id=sessionStorage.getItem('item_id')
  //   // axios.post(url, {item_id: item_id})
  //   //   .then(res  =>{
  //   //       // console.log(res)
  //   //     sessionStorage.setItem('item_id',item_id)
  //   //     this.history.push({
  //   //       pathname:'/detail'
  //   //     })
  //   //   })
  // }

  render() {




    const  content = this.state.userdata.map((item,no)=>
      <CCol>
      <CCard>

    <div key={no} class='ad'>
        <Link to='/itemdetail'><img src={'http://127.0.0.1:8000/media/'+item.item_image} onClick={()=>{ this.detail(no) }} /></Link>
      <CCol>
        <CRow class='bold'>{item.item_name}</CRow>
        <CRow class='bold'>Price:${item.item_price}</CRow>
      </CCol>

    </div>
        <br></br>
        <CButton color='info' onClick={()=>{ this.submit(no) }} >Add to Cart</CButton>
      </CCard>
      </CCol>
    )

    return (
      <div>
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
            <CButton color="success" onClick={() => this.setState({success:!this.state.success})}>Continue to add</CButton>
          {/*</CModalFooter>*/}
        </CModal>
              <CCard>
                <CCardHeader>
                  Product List
                </CCardHeader>
                <div >

                <CCardBody >
                  {content}
                </CCardBody>
                </div>

              </CCard>

      </div>

    )
  }
}
export default Children
