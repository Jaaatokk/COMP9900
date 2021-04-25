import React, { useState } from 'react'
import { Link ,useHistory } from 'react-router-dom'
import {
  CCardHeader,
  CButton,
  CCardBody,
  CContainer, CFooter, CModal, CModalHeader, CModalTitle
} from '@coreui/react'
import axios from 'axios'

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    let url = 'http://127.0.0.1:8000/item/detail/'
    let item_id = sessionStorage.getItem('item_id')
    axios.post(url, {item_id: item_id})
      .then(res => {
        console.log("daole",res)

      })
  }


  render() {
    return (
      <div>
        aaaaaa
      </div>
    )
  }

}

export default Detail
