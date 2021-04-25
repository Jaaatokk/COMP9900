import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForUser from "./TheHeaderForUser"
import TheSidebarForUser from "./TheSiderbarForUser";
import TheContent from "./TheContent"

import styles from './home.css'
import Payment from "../payment/payment";


const Upayment = () => {
  // const [isOpen, setIsOpen] = useState(false)
  // const [isOpenDropdown, setIsOpenDropdown] = useState(false)


  return (
    <div className="c-app c-default-layout">
      <TheSidebarForUser/>
      <div className="c-wrapper">
        <TheHeaderForUser/>
        <div className="c-body">
          <Payment/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default Upayment
