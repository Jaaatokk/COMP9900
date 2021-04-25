import React from 'react'
import CIcon from '@coreui/icons-react'
import {freeSet} from "@coreui/icons";

export default [

  {
    _tag: 'CSidebarNavItem',
    name: 'View Product',
    to: '/viewproduct',
    icon: <CIcon content={freeSet.cilBook} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'All Order',
    to: '/allhistory',
    icon: <CIcon content={freeSet.cilListNumberedRtl} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Statistic',
    to: '/statistic',
    icon: <CIcon content={freeSet.cilChart} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add Items',
    to: '/upload',
    icon: <CIcon content={freeSet.cilCloudUpload} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'LOG OUT',
    to: '/login',
    icon: <CIcon content={freeSet.cilAccountLogout} customClasses="c-sidebar-nav-icon"/>
  }
]
