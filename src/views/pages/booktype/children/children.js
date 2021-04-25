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
  CRow
} from '@coreui/react'

import img from './lion.jpg'





const Children = () => {
  const [isOpen, setIsOpen] = useState(false)




  return (
    <>

      <CCardBody>
        <CRow>
          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader >
              Product details
              </CCardHeader>
              <CCardBody >
              <Link to="/detailpage">
              <CCardImg className= "photostyle" src = {img}  ></CCardImg>
              </Link>
              <br/>
              <CRow className = "txt"> Name: The Lion King</CRow>
              <CRow className = "txt"> price: 20 AUS</CRow>
              <CRow className = "txt"> Writer: Irene Mecchi</CRow>
              </CCardBody>
            </CCard>
          </CCol>



          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader >
              Product details
              </CCardHeader>
              <CCardBody >
              <Link to="/detailpage">
              <CCardImg className= "photostyle" src = {img}  ></CCardImg>
              </Link>
              <br/>
              <CRow className = "txt"> Name: The Lion King</CRow>
              <CRow className = "txt"> price: 20 AUS</CRow>
              <CRow className = "txt"> Writer: Irene Mecchi</CRow>
              </CCardBody>
            </CCard>
          </CCol>


          <CCol xs="12" xl="4">
            <CCard>
              <CCardHeader >
              Product details
              </CCardHeader>
              <CCardBody >
              <Link to="/detailpage">
              <CCardImg className= "photostyle" src = {img}  ></CCardImg>
              </Link>
              <br/>
              <CRow className = "txt"> Name: The Lion King</CRow>
              <CRow className = "txt"> price: 20 AUS</CRow>
              <CRow className = "txt"> Writer: Irene Mecchi</CRow>
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

export default Children
