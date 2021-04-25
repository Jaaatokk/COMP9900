import React ,{useState}from 'react'
import {Link, useHistory} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import styles from "./Login.css"
import axios from "axios";

const server = 'http://127.0.0.1:8000';



const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState(false)
  const [info, setInfo] = useState(false);
  const [modal, setModal] = useState(false);
  // const [user_type,setUser_type]= useState("0")
  const toggle = ()=>{
    setModal(!modal);
  }



  const history = useHistory();
  const sendUserInfo = () => {
    console.log(password, email);
    axios.post(`${server}/login/`, {
      email: email,
      password: password,
      key:''
    })
      .then(res => {
        sessionStorage.setItem("key", res.data['key']);
        sessionStorage.setItem("user_type", res.data['user_type']);


          // sessionStorage.setItem("user_type", res.data['user_type']);

        // console.log(res.data.key)
        if (res.data.success === true){
          // console.log(res.data['user_type'])
          // sessionStorage.getItem('user_type', res.data['user_type']);
          if (res.data['user_type'] === 2 ){
            // console.log('aaaaa')
            history.push({
              pathname: '/viewproduct',
              state: { error: res.message },
              // key:res.data['key']
            })
          }
          else{
            console.log(res.data['user_type'])
            history.push({
              pathname: '/userinfo',
              state: { error: res.message },
            })
          }

        }else{
          console.log(res.data.message)
          setWarning(!warning)
          history.push({
            pathname: '/login',
            state: { error: res.message }
          }
            )
        }
      }


      )
    .catch(error=>{
      console.log(error)
      setWarning(!warning)

      });
  }

  // useEffect(() => {
  //   sessionStorage.clear();
  // });
  return (
    <div className={styles.container}>
      <CContainer>


        <CModal
          show={warning}
          onClose={()=>setWarning(!warning)}
        >
          <CModalHeader closeButton>Warning</CModalHeader>
          <CModalBody>
           INVALID INPUT !
          </CModalBody>
          <CModalFooter>
            <CButton color="primary" onClick={()=>setWarning(!warning)}>Try Again</CButton>{' '}
          </CModalFooter>
        </CModal>

        <CRow>
          <CCol >
            <CCardGroup>
              <CCard className='p-2'>
                <CCardBody className={styles.cardbody}>
                  <CForm>
                    <h1> Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-auto">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username"  onChange={ e => setEmail(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={ e => setPassword(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={sendUserInfo}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Marvelous</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
