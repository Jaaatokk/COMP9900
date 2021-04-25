import React from 'react'
import CIcon from '@coreui/icons-react'
import {freeSet} from "@coreui/icons";
// eslint-disable-next-line
export default [

  {
    _tag: 'CSidebarNavItem',
    name: 'All Book',
    to: '/childrenbook',
    icon: <CIcon content={freeSet.cilBaby} customClasses="c-sidebar-nav-icon"/>
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'FictionBook',
  //   to: '/childrenbook',
  //   icon: <CIcon content={freeSet.cilNewspaper} customClasses="c-sidebar-nav-icon"/>
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Personal Info',
    to: '/userinfo',
    icon: <CIcon content={freeSet.cilFeaturedPlaylist} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'The unpaid order',
    to: '/readypay',
    icon: <CIcon content={freeSet.cilCreditCard} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Order History',
    to: '/ohistory',
    icon: <CIcon content={freeSet.cilCloud} customClasses="c-sidebar-nav-icon"/>
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Chatbot',
  //   to: 'http://localhost:63343/coreui-free-react-admin-template-master/src/views/pages/user_page/ChatBot.html?_ijt=fj8fqlvi29oq281trkbc4fgrr8',
  //   icon: <CIcon content={freeSet.cilCommentSquare} customClasses="c-sidebar-nav-icon"/>
  // },

  {
    _tag: 'CSidebarNavItem',
    name: 'LOG OUT',
    to: '/login',
    icon: <CIcon content={freeSet.cilAccountLogout} customClasses="c-sidebar-nav-icon"/>
  }
]

