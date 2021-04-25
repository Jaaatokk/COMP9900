import { Link } from 'react-router-dom'
import TheFooter from "./TheFooter";
import TheHeaderForAdmin from "./TheHeaderForAdmin"
import TheSidebarForAdmin from "./TheSidebarForAdmin";
import ViewProduct_Cont from "./ViewProduct_Cont"


const ViewAllItem = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebarForAdmin/>
      <div className="c-wrapper">
        <TheHeaderForAdmin/>
        <div className="c-body">
          <ViewProduct_Cont/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default ViewAllItem
