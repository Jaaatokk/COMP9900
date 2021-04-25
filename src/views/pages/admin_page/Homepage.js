import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForAdmin from "./TheHeaderForAdmin"
import TheSidebarForAdmin from "./TheSidebarForAdmin";


const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [isOpenDropdown, setIsOpenDropdown] = useState(false)


  return (
    <div className="c-app c-default-layout">
      <TheSidebarForAdmin/>
      <div className="c-wrapper">
        <TheHeaderForAdmin/>
        <div className="c-body">
          CONTENT
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default Homepage
