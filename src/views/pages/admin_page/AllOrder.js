import { Link } from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForAdmin from "./TheHeaderForAdmin"
import TheSidebarForAdmin from "./TheSidebarForAdmin";

import OrderHistory from "../order/orderhistory";

const Allhistory = () => {
  // const [isOpen, setIsOpen] = useState(false)
  // const [isOpenDropdown, setIsOpenDropdown] = useState(false)


  return (
    <div className="c-app c-default-layout">
      <TheSidebarForAdmin/>
      <div className="c-wrapper">
        <TheHeaderForAdmin/>
        <div className="c-body">
          <OrderHistory/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default Allhistory
