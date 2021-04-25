import React from 'react'
import CIcon from '@coreui/icons-react'
import {freeSet} from "@coreui/icons";

export default [

  {
    _tag: 'CSidebarNavItem',
    name: '童书',
    to: '/profile/contributorprofile',
    icon: <CIcon content={freeSet.cilBaby} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: '时事',
    to: '/profile/contributorphotos',
    icon: <CIcon content={freeSet.cilNewspaper} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: '科幻',
    to: '/profile/allcomments',
    icon: <CIcon content={freeSet.cilFeaturedPlaylist} customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Chatbot',
    to: '/profile/allcomments',
    icon: <CIcon content={freeSet.cilCommentSquare} customClasses="c-sidebar-nav-icon"/>
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'LOG OUT',
    to: '/profile/homepage',
    icon: <CIcon content={freeSet.cilAccountLogout} customClasses="c-sidebar-nav-icon"/>
  }
]

