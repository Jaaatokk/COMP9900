import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
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
          <strong>Already Log In</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />User Info
        </CDropdownItem>

        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Order History
          {/*<CBadge color="primary" className="mfs-auto">42</CBadge>*/}
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-account-logout" className="mfe-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
