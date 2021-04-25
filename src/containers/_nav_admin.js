import React from 'react'
import CIcon from '@coreui/icons-react'
import {freeSet} from "@coreui/icons";

export default [

  {
    _tag: 'CSidebarNavItem',
    name: 'View Product',
    to: '/profile/contributorprofile',
    icon: <CIcon content={freeSet.cilBook} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'All Order',
    to: '/profile/allpurchase',
    icon: <CIcon content={freeSet.cilListNumberedRtl} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Statistic',
    to: '/profile/statistic',
    icon: <CIcon content={freeSet.cilChart} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add Items',
    to: '/profile/imageuploadform',
    icon: <CIcon content={freeSet.cilCloudUpload} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'LOG OUT',
    to: '/profile/homepage',
    icon: <CIcon content={freeSet.cilAccountLogout} customClasses="c-sidebar-nav-icon"/>
  }
]
