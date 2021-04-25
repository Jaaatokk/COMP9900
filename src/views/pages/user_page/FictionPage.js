import { Link } from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForUser from "./TheHeaderForUser"
import TheSidebarForUser from "./TheSiderbarForUser";
import {
  CRow
} from '@coreui/react'
import Children from "../children/children";

const Fiction = () => {
  // const [isOpen, setIsOpen] = useState(false)
  // const [isOpenDropdown, setIsOpenDropdown] = useState(false)


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

export default Fiction
