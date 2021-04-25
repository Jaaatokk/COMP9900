import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,

  CCarouselControl,
  CFooter,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow
} from '@coreui/react'
import img from "./41LRw7zUB4L.jpg"
import img2 from "./tolstoy.jpg"

import img4 from "./demo4.jpg"
import img5 from "./demo5.jpg"

import Re from "./Re"
import styles from './Carousels.css'
const slides = [
  img,img2,img4,img5
]


const Carousels = () => {
  const [activeIndex] = useState(1)

  return (
    <div>
    <CRow className="mb-1 mb-xl-4 text-center" >
      <CCol xs="12" xl="4" className='demo-5-item'>
        <CCard  className='cardbody'>
          <CCardHeader>
            GOODS LIST
          </CCardHeader>
          <CCardBody >
            <CCarousel animate autoSlide={3000}>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[3]} alt="slide 3"/>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>

          </CCardBody>
          <CFooter><Re/></CFooter>
        </CCard>
      </CCol>
      <CCol xs="12" xl="4" className='demo-6-item'>
        <CCard className='cardbody'>



        </CCard>
      </CCol>

    </CRow>



    </div>
  )
}

export default Carousels
