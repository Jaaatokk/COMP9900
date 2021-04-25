import React from 'react'
import {
  TheContent,
  TheSidebarForUser,
  TheFooter,
  TheHeaderForUser
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebarForUser/>
      <div className="c-wrapper">
        <TheHeaderForUser/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
