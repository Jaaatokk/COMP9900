import React from 'react'

import {
  CButton,

  CCol,
  CContainer,

} from '@coreui/react'

import styles from "./welcome.css"

const Wel = () => {
  return (
    <div className={styles.container}>
      <CContainer>
      <CCol col="2" className="mb-3 mb-xl-0 text-center">
              <CButton className="loginbutton" color="primary" size="lg" Link to='/mainpage'>Let's Start</CButton>
            </CCol>
      </CContainer>
    </div>
  )
}

export default Wel
