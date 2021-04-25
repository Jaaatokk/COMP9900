import React ,{useState,useEffect}from 'react'
import {Link, useHistory} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CForm,
  CModal,
  CRow,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLabel,CFormGroup,CInputRadio,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import styles from './Register.css'
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json'
const server = 'http://127.0.0.1:8000';


const Register = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('')
  const [email, setEmail] = useState('')
  const [warning, setWarning] = useState(false)
  const [info, setInfo] = useState(false);
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const [user_type, setUser_type] = useState('0')
  const history = useHistory();

  const sendUserInfo = () => {
    console.log(username, email, password,user_type);
    if (username && email && password && confirmPass){
      if (password === confirmPass){
        axios.post(`${server}/register/`, {
          username: username,
          email: email,
          password: password,
          user_type:user_type,

      })
          .then(res => {
            console.log(res.status);
            setSuccess(!success);
          })
          .catch(err => {
            console.log(err);
            setWarning(!warning);
          });
      } else {
        setMessage("Password don't match.")
        setInfo(!info);
      }
    } else {
      setMessage("Please provide all information.");
      setInfo(!info);
    }
  }

  useEffect(() => {
    sessionStorage.clear();
  });
  return (
    <div className={styles.container}>
      <CContainer>



        <CModal
          show={success}
          onClose={() => setSuccess(!success)}
          color="success"
        >
          <CModalHeader closeButton>
            <CModalTitle>Successful Regisration</CModalTitle>
          </CModalHeader>
          <CModalBody>
            Congratulations!! You have successfully registered, login now!
          </CModalBody>
          <CModalFooter>
            <CButton color="success" onClick={() => setSuccess(!success)}><Link to="/login">Log in</Link></CButton>{' '}
            <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
          </CModalFooter>
        </CModal>

        {/* a notice card which will show if register unsuccessfully */}
        <CModal
          show={warning}
          onClose={() => setWarning(!warning)}
          color="warning"
        >
          <CModalHeader closeButton>
            <CModalTitle>Conflict</CModalTitle>
          </CModalHeader>
          <CModalBody>
            User has already been registered, try again.
          </CModalBody>
          <CModalFooter>
            <CButton color="warning" onClick={() => setWarning(!warning)}>Try again</CButton>{' '}
          </CModalFooter>
        </CModal>

        {/* a notice card which will show if any notice */}
        <CModal
          show={info}
          onClose={() => setInfo(!info)}
          color="info"
        >
          <CModalHeader closeButton>
            <CModalTitle>Notice</CModalTitle>
          </CModalHeader>
          <CModalBody>
            {message}
          </CModalBody>
          <CModalFooter>
            <CButton color="info" onClick={() => setInfo(!info)}>OK</CButton>{' '}
          </CModalFooter>
        </CModal>







          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1 >Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" onChange={ e => setUsername(e.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" onChange={ e => setEmail(e.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password"  onChange={ e => setPassword(e.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend >
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" onChange={ e => setConfirmPass(e.target.value)}/>
                  </CInputGroup>


                  <CLabel className='text-muted' md="9" lg="7" xl="6">Choose Type<br/><br/>
                    <CFormGroup variant="custom-radio" inline value="2" onChange={ e => setUser_type(e.target.value)}>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="2"  />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1" >Admin</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline value="1" onChange={ e => setUser_type(e.target.value)}>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="1"  />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2" >User</CLabel>
                    </CFormGroup>
                  </CLabel>
                  <br/>


                  <CButton color="success" block onClick={sendUserInfo} >Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <Link to='/login'>
                    <CButton className="btn-facebook mb-1" block><span>Back to Login</span></CButton>
                    </Link>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>

      </CContainer>
    </div>
  )
}

export default Register
