import React, { useState } from 'react'
import TheFooter from "./TheFooter";
import TheHeaderForUser from "./TheHeaderForUser"
import TheSidebarForUser from "./TheSiderbarForUser";
import TheContent from "./TheContent"

import Children from "../children/children";
import axios from "axios";

const ChildPage = () => {


  return (
    <div className="c-app c-default-layout">
      <TheSidebarForUser/>
      <div className="c-wrapper">
        <TheHeaderForUser/>
        <div className="c-body">
          <Children/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default ChildPage
