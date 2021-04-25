import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
import axios from 'axios'
const server = 'http://127.0.0.1:8000';

const fields = ['order_id','user_name','total_price','order_time','order_status']

class OrderHistory extends React.Component {
    constructor() {
      super();
      this.state = {
        userData:[],
        // uID:'',
        // book_name:'',
        // total_price:'',
        // order_time:'',
        // order_id:'',

      }
    }

    componentDidMount() {
      const userdata =[]
      axios.get(`${server}/order/show_all/`)
        .then(res => {
          // console.log(res.data.order_list[0].item_list[0]);
          console.log(res);
          res.data['order_list'].forEach((od,no)=>{
            userdata.push({
              no,order_id:od['order_id'],
              user_name:od['user_name'],
              total_price:od['total_price'],
              order_time:od['order_created_time'],
              order_status:od['order_status']
            });
            console.log(userdata);
            this.setState({
              userData:userdata,

            })
          })

        })
        .catch(err => console.log(err));
    }

    render() {


      return (
        <>


          <CRow alignHorizontal='center'>
            <CCol xs="12" md="10">
              <CCard>
                <CCardHeader>
                  View All Orders
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>
                      <CCard>
                        {/*<CCardHeader>*/}
                        {/*  each order*/}
                        {/*</CCardHeader>*/}
                        <CCardBody>
                          <CDataTable
                            items={this.state.userData}
                            fields={fields}
                            hover
                            striped
                            bordered
                            columnFilter
                            tableFilter
                            itemsPerPageSelect
                            size="sm"
                            itemsPerPage={5}
                            pagination
                            scopedSlots={{
                              'status':
                                (item) => (
                                  <td>
                                    {/* <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge> */}
                                  </td>
                                )
                            }}
                          />
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>

                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </>
      )
    }
  }
  export default OrderHistory;
