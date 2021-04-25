import React from 'react'
import ExplorerProfileSidebar from './ExplorerProfileSidebar';
import ExplorerProfileHeader from './ExplorerProfileHeader';
import Footer from '../../../components/resueable/footer/footer';
import ProfileContent from './ExplorerProfileContent';

const Profile = () => {

  return (
    <div className="c-app c-default-layout">
      <ExplorerProfileSidebar/>
      <div className="c-wrapper">
        <ExplorerProfileHeader/>
        <div className="c-body">
          <ProfileContent/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Profile
