import { Link } from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForUser from "./TheHeaderForUser"
import TheSidebarForUser from "./TheSiderbarForUser";
import {
  CRow,
} from '@coreui/react'
import Children from "../children/children";

const ChatBot = () => {



  return (
    <div className="c-app c-default-layout">
      <TheSidebarForUser/>
      <div className="c-wrapper">
        <TheHeaderForUser/>
        <div className="c-body">
          <CRow> AAA</CRow>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default ChatBot;
