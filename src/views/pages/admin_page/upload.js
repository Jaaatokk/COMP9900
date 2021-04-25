import React, { useState } from 'react'
// import Axios from 'axios'
import {
  CButton,
  CModal,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CRow,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText, CModalHeader, CModalTitle, CModalBody, CModalFooter, CContainer,CSelect,CInputFile
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import TheSidebarForAdmin from "./TheSidebarForAdmin";
import TheHeaderForAdmin from "./TheHeaderForAdmin";
import render from "enzyme/src/render";
import TheFooter from "./TheFooter";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import warning from "react-redux/lib/utils/warning";


class Upload extends React.Component{
  state = {
    item_name: '',
    item_des: '',
    item_price:'',
    author:'',
    category:'',
    image: null,
    success:false,
    warning:false,
    info:false,
    message:'',
    //
  };

  handleChangeName = (e) => {
    this.setState({
      // [e.target.item_name]: e.target.value,
      item_name:e.target.value,
    })
  };
  handleChangePrice = (e) => {
    this.setState({
      item_price:e.target.value,
    })
  };
  handleChangeDes = (e) => {
    this.setState({
      item_des:e.target.value,
    })
  };
  handleChangeAuthor = (e) => {
    this.setState({
      author:e.target.value,
    })
  };
  handleChangeCategory = (e) => {
    this.setState({
      category:e.target.value,
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  resetClick = () => {
    this.setState({
      item_name:'',
      item_price:'',
      item_des:'',
      category:'',
      author:'',
      success:false,
      warning:false,
      info:false,
      image:null,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.item_name);
    let form_data = new FormData();
    form_data.append('item_image', this.state.image);
    // console.log(this.state.image.name)
    form_data.append('item_name', this.state.item_name);
    form_data.append('item_des', this.state.item_des);
    form_data.append('author', this.state.author);
    form_data.append('category', this.state.category);
    form_data.append('item_price', this.state.item_price);
    let url = 'http://127.0.0.1:8000/item/add/';
  // && (this.state.item_price > 0) && this.state.item_des && this.state.author && this.state.category && this.state.image
    if (this.state.item_name&&( this.state.item_price && this.state.item_des && this.state.author && this.state.category && this.state.image )){
          axios.post(url, form_data, {
            headers: {
              'content-type': 'multipart/form-data'
            }
          })
          .then(res => {
            console.log(!this.state.success);
            this.setState({
              success:!this.state.success
            })
          })
          .catch(err => {
            console.log(err);
            this.setState({
              warning:!this.state.warning
            })
          });
    } else {
      this.setState({
        message:'Please provide all information'
      })
    }
  }
  //   if() {
  //     axios.post(url, form_data, {
  //       headers: {
  //         'content-type': 'multipart/form-data'
  //       }
  //     })
  //       .then(res => {
  //         console.log(!this.state.success);
  //         console.log('aaaaaaaaaaaaaaaaa')
  //       })
  //       .catch(err => {
  //         console.log(!this.state.warning)
  //       })
  //   }else {
  //     console.log(!this.state.message);
  //
  //   }
  //
  // }

    render()
    {

      return (


        <div className="c-app c-default-layout">
          <CModal
            show={this.state.success}
            onClose={() => (!this.state.success)}
            color="success"
          >
            <CModalHeader closeButton>
              <CModalTitle>Successful Added</CModalTitle>
            </CModalHeader>
            <CModalBody>
              Congratulations!! You have successfully added, check now!
            </CModalBody>
            {/*<CModalFooter>*/}
            {/*  <CButton color="success" onClick={() => this.setState({success:!this.state.success})}>Continue</CButton>{' '}*/}
            {/*  /!*<CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>*!/*/}
            {/*</CModalFooter>*/}
          </CModal>

          <CModal
            show={this.state.warning}
            onClose={() => (!this.state.warning)}
            color="warning"
          >
            <CModalHeader closeButton>
              <CModalTitle>Conflict</CModalTitle>
            </CModalHeader>
            <CModalBody>
              Book has already been added, try again.
            </CModalBody>
            {/*<CModalFooter>*/}
            {/*  <CButton color="warning" onClick={() => this.setState({warning:!this.state.warning})}>Try again</CButton>{' '}*/}
            {/*</CModalFooter>*/}
          </CModal>

          {/* a notice card which will show if any notice */}
          <CModal
            show={this.state.message}
            onClose={() => (!this.state.message)}
            color="warning"
          >
            <CModalHeader closeButton>
              <CModalTitle>Notice</CModalTitle>
            </CModalHeader>
            <CModalBody>
              Please provide all information!
            </CModalBody>
            {/*<CModalFooter>*/}
            {/*  <CButton color="info" onClick={() => (!this.state.message)}>OK</CButton>{' '}*/}
            {/*</CModalFooter>*/}
          </CModal>

          <TheSidebarForAdmin/>
          <div className="c-wrapper">
            <TheHeaderForAdmin/>
            <div>
              <CRow alignHorizontal='center'>
                <CCol xs="12" md="10">
                  <CCard>
                    <CCardHeader>
                      Book Upload
                    </CCardHeader>
                    <CCardBody>
                      <CForm className="form-horizontal">

                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="book-title">Book Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput id="book-title" name="book-title" placeholder="Book Title"
                                    value={this.state.item_name} onChange={e => this.handleChangeName(e)}/>
                            <CFormText>Enter a name for your book</CFormText>
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel>Book Price</CLabel>
                            {/* <CLabel htmlFor="photo-price">Photo Price</CLabel> */}
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInputGroup className="input-prepend">
                              <CInputGroupPrepend>
                                <CInputGroupText>$</CInputGroupText>
                              </CInputGroupPrepend>
                              <CInput id="book-price" name="book-price" type="number" value={this.state.item_price}
                                      onChange={e => this.handleChangePrice(e)}/>
                            </CInputGroup>
                            <CFormText>Set price for your book</CFormText>
                          </CCol>

                        </CFormGroup>

                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="book-introduction">Book Description</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput id="book-introduction" name="book-introduction" placeholder="Book introduction"
                                    value={this.state.item_des} onChange={e=>this.handleChangeDes(e)}/>
                            <CFormText>Enter a Description for your book</CFormText>
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="category">Category</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CSelect custom name="photo-status" id="photo-status" value={this.state.category}
                                     onChange={e=>this.handleChangeCategory(e)}>
                              <option value="">Please select</option>
                              <option value="Classics">Classics</option>
                              <option value="Science Fiction">Science fiction</option>
                              <option value="Mysteries">Mysteries</option>
                              <option value="Fantasy">Fantasy</option>
                              <option value="Westerns">Westerns</option>
                              <option value="Romance">Romance</option>
                              <option value="Historical">Historical</option>
                              <option value="Children">Children</option>
                            </CSelect>
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="author">Author</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput id="author" name="author" placeholder="author" value={this.state.author}
                                    onChange={e=>this.handleChangeAuthor(e)}/>
                            <CFormText>Enter Author for your book</CFormText>
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CLabel col md="3" htmlFor="file-input">File Upload</CLabel>
                          <CCol xs="12" md="9">
                            <CInputFile id="file-input" name="file-input" onChange={e=>this.handleImageChange(e)}/>
                          </CCol>
                        </CFormGroup>


                      </CForm>


                    </CCardBody>
                    <CCardFooter>
                      <CRow className="justify-content-center">
                        <CButton type="submit" size="sm" color="success" onClick={e=>this.handleSubmit(e)}><CIcon
                          name="cil-scrubber"/> Submit</CButton>
                        <CButton type="reset" size="sm" color="danger" onClick={this.resetClick}><CIcon
                          name="cil-ban"/> Reset</CButton>
                      </CRow>
                    </CCardFooter>
                  </CCard>

                </CCol>
              </CRow>
            </div>

            <TheFooter/>
          </div>
        </div>

      )
    }
  }








export default Upload
