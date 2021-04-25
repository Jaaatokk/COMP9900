import React from 'react'
import styles from './AllComments.module.css'
import {
    CDataTable,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow
} from '@coreui/react'
import TheSidebarForAdmin from "./TheSidebarForAdmin";
import TheHeaderForAdmin from "./TheHeaderForAdmin";
import TheFooter from "./TheFooter";
import axios from "axios";

const fields = [
  { key: 'Title', _style: { width: '20%'} },
  { key: 'image', _style: { width: '50%'}, filter:false},
  { key: 'Tag', _style: { width: '15%'} },
  { key: 'Like', _style: { width: '5%' }, filter:false},
  { key: 'Comment', _style: { width: '5%' }, filter:false },
  { key: 'Purchase', _style: { width: '5%' }, filter:false }
]

class Statistic extends React.Component {
    constructor(){
        super();
        this.state = {

        }
      }

  componentDidMount(){
      let url= 'http://127.0.0.1:8000/statistics/'
    const key =sessionStorage.getItem("key")
   axios.post(url,{key:key})
    .then(res => {
        console.log(res.data['total_sell_price']);
        // let total=res.data['total_sell_price']
        this.setState({
            total:res.data['total_sell_price'],
            order:res.data['amount_sell_orders']
        });
      })
      .catch(err => {
        console.log(err)
      });
    }

render(){
  return (
    <div className="c-app c-default-layout">
      <TheSidebarForAdmin/>
      <div className="c-wrapper">
        <TheHeaderForAdmin/>
        <div className="c-body">
          <CRow alignHorizontal='center'>
            <CCol xs="12" md="10">
              <CCard>
                <CCardHeader>
                  Statistic
                </CCardHeader>
                <CCardBody>
                  <h3>Total Sell Price:{this.state.total}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Sell Orders:{this.state.order}</h3>

                  {/*<CDataTable*/}
                  {/*  // items={this.state.photoArr}*/}
                  {/*  // fields={fields}*/}
                  {/*  // columnFilter*/}
                  {/*  // tableFilter*/}
                  {/*  // itemsPerPageSelect*/}
                  {/*  // itemsPerPage={5}*/}
                  {/*  // hover*/}
                  {/*  // sorter*/}
                  {/*  // pagination*/}
                  {/*  // scopedSlots = {{*/}
                  {/*  //   'image':*/}
                  {/*  //     (item)=>(*/}
                  {/*  //       <td>*/}
                  {/*  //         /!*<img src={item.image} alt="" className={styles.commentImage}></img>*!/*/}
                  {/*  //         para*/}
                  {/*  //       </td>*/}
                  {/*  //     ),*/}
                  {/*  // }}*/}
                  {/*/>*/}
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
        <TheFooter/>
      </div>
    </div>





  );
 }
}

export default Statistic;
