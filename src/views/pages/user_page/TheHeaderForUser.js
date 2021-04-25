import { useSelector, useDispatch } from 'react-redux'
import React ,{useState}from 'react'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CLink, CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CContainer
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import styles from './header.css'

import {
  TheHeaderDropdown,
}  from './index'
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const TheHeader = () => {
  // const [num1,setNum1]=useState('0')
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }
  // const num =sessionStorage.getItem("num")
  const history = useHistory();
  const [check,setCheck]=useState('')
  const key=sessionStorage.getItem('key')
  const [msg,setMsg]=useState('')
  const [checklist,setChecklist]=useState(0)
  // const item_id=sessionStorage
  const cart=()=>{
    let url='http://127.0.0.1:8000/cart/show/'
    const key=sessionStorage.getItem('key')

    axios.post(url,{key:key})
      .then(res=>{
        console.log(res.data['data'])
        if (res.data['data']!==null){
          history.push({
            pathname:'/cart'
          })


        }else{
          setMsg(res.data['message'])
          history.push({
            pathname: '/carttest'
          })
        }
      })

  }



  return (


    <CHeader withSubheader>

      <CModal
        show={msg}
        onClose={() => setMsg(!msg)}
        color="info"
      >
        <CModalHeader closeButton>
          <CModalTitle>Your Cart is empty</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Please select the item before entering the cart.
        </CModalBody>
        {/*<CModalFooter>*/}
        {/*  <CButton color="success" onClick={() => setSuccess(!success)}><Link to="/login">Log in</Link></CButton>{' '}*/}
        {/*  <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>*/}
        {/*</CModalFooter>*/}
      </CModal>

      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CLink to ="/homepage"><CHeaderNavLink to="/user"><CIcon name="cil-home"  alt="Logo"/>Homepage</CHeaderNavLink></CLink>
        </CHeaderNavItem>

        <CHeaderNavItem className="px-3" >

          <CHeaderNavLink ><CIcon name="cil-cart"  alt="Logo"/> <CButton onClick={cart} >Cart</CButton></CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
        <CButton>
          <a href="http://localhost:63343/coreui-free-react-admin-template-master/src/views/pages/user_page/index.html?_ijt=f05buv75rn90u8t0nuroeqo9r8" class='bt'>ChatBot</a></CButton>
        </CHeaderNavItem>

      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>


    </CHeader>
  )
}

export default TheHeader
