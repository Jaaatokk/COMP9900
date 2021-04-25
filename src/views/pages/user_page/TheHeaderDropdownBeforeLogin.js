import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CLink
} from '@coreui/react'
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import userinfo from "./UserInfo"

const TheHeaderDropdownBeforeLogin = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={true}>
        <div className="c-avatar">
          <CIcon class ="cil-sort-descending"/>
          <CImg
            src={'avatars/profile.png'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">

        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Please Log In</strong>
        </CDropdownItem>

        {/*<CDropdownItem >*/}
        {/*  <CIcon name="cil-user" className="mfe-2" /><CLink to ="/userinfo">User Info</CLink>*/}
        {/*</CDropdownItem>*/}

        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-account-logout" className="mfe-2" />
          <CLink to ="/login">Login</CLink>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownBeforeLogin
