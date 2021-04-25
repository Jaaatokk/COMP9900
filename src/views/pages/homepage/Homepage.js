import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CToggler,
  CNavLink,
  CDropdown,
  CForm,
  CInput,
  CButton,
  CPagination,
  CCardFooter,
  CCardImg,
  CCol,
  CRow 
} from '@coreui/react'

import img from '../img/demo1.jpg'
import img2 from '../img/demo2.jpg'
import img3 from '../img/demo3.jpg'
import img4 from '../img/demo4.jpg'
import img5 from '../img/demo5.jpg'
import img6 from '../img/demo6.jpg'

import styles from './Homepage.css'


const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [isOpenDropdown, setIsOpenDropdown] = useState(false)



  return (
    <>
      <CCardHeader>
        <CCardBody>
          <CNavbar expandable="sm" color="info" >
            <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}/>
            <CNavbarBrand>
              Marvelous
            </CNavbarBrand>
            <CCollapse show={isOpen} navbar>
              <CNavbarNav>
                <CNavLink>Home</CNavLink>
                <CNavLink>biography</CNavLink>
                <CNavLink>novel</CNavLink>
                <CNavLink>history</CNavLink>
                <CNavLink>fiction</CNavLink>
                <CNavLink>romance</CNavLink>
              </CNavbarNav>
              <Link to ='/cart'>
                <CButton color='light' className="my-2 my-sm-0" >Cart</CButton>
              </Link>


              <CNavbarNav className="ml-auto">
                <CForm inline>
                  <CInput
                    className="mr-sm-2"
                    placeholder="Search Items"
                    size="sm"
                  />
                  <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
                </CForm>
                <CDropdown
                  inNav
                >
                  <CDropdownToggle color="primary">
                    Language
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>EN</CDropdownItem>
                    <CDropdownItem>ES</CDropdownItem>
                    <CDropdownItem>RU</CDropdownItem>
                    <CDropdownItem>FA</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown
                  inNav
                >
                  <CDropdownToggle color="primary">
                    User
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Account</CDropdownItem>
                    <CDropdownItem>Settings</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CNavbarNav>
            </CCollapse>
          </CNavbar>
        </CCardBody>
      </CCardHeader>

      <CCardBody>
        <CRow>
          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader className = {styles.txt}>
              Product details
              </CCardHeader>
              <CCardBody > 
              <Link to="/detailpage">
              <CCardImg className={styles.photostyle} src = {img} widht="300" height="600" ></CCardImg>
              </Link>
              <CRow > Name: Journey to the West </CRow>
              <CRow > price: 30 AUS</CRow>
              <CRow> Writer:  Wu Cheng'en </CRow>
              </CCardBody>
            </CCard>
          </CCol>



          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader>
              Product details
              </CCardHeader>
              <CCardBody > 
              <Link to="/detailpage">
              <CCardImg className={styles.photostyle} src = {img2} widht="300" height="600" ></CCardImg>
              </Link>
              
              <CRow> Name: Hamlet </CRow>
              <CRow> price: 20 AUS</CRow>
              <CRow> Writer: William Shakespeare</CRow>
              </CCardBody>
            </CCard>
          </CCol>


          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader>
              Product details
              </CCardHeader>
              <CCardBody > 
              <Link to="/regist
              er">
              <CCardImg className={styles.photostyle} src = {img3} widht="300" height="600" ></CCardImg>
              </Link>
              <CRow> Name: The Twilight Saga </CRow>
              <CRow> price: 40 AUS</CRow>
              <CRow> Writer: Stephenie Meyer</CRow>
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>


        <CRow>
          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader>
              Product details
              </CCardHeader>
              <CCardBody > 
              <Link to="/register">
              <CCardImg className={styles.photostyle} src = {img4} widht="300" height="600" ></CCardImg>
              </Link>
              <CRow> Name:  Genji Monogatari</CRow>
              <CRow> price: 15 AUS</CRow>
              <CRow> Writer: 紫式部</CRow>
              </CCardBody>
            </CCard>
          </CCol>



          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader>
              Product details
              </CCardHeader>
              <CCardBody > 
              <Link to="/register">
              <CCardImg className={styles.photostyle} src = {img5} widht="300" height="600" ></CCardImg>
              </Link>
              <CRow> Name: The Lord of the Rings</CRow>
              <CRow> price: 25 AUS</CRow>
              <CRow> Writer: J. R. R. Tolkien</CRow>
              </CCardBody>
            </CCard>
          </CCol>


          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader>
              Product details
              </CCardHeader>
              <CCardBody > 
              <Link to="/register">
              <CCardImg className={styles.photostyle} src = {img6} widht="300" height="600" ></CCardImg>
              </Link>
              <CRow> Name: Harry Potter</CRow>
              <CRow> price: 22 AUS</CRow>
              <CRow> Writer: J. K. Rowling</CRow>
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>


        



      </CCardBody>

      



      <CCard>
        <CCardFooter className= " center" >

        <CCardBody className="text-muted" >

          <CPagination className="row justify-content-center"
            // activePage={currentPage}
            pages={3}
            // onActivePageChange={setCurrentPage}
          />
          {/* <div className="row justify-content-center" >Jump pages</div> */}
        </CCardBody>
        </CCardFooter>
      </CCard>

    </>
  )
}

export default Homepage
