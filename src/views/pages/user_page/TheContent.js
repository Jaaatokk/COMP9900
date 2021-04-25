import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'



import OrderHistory from "../order/orderhistory"
import Children from "../children/children";
import Upayment from "./Upayment";

// import FictionPage from "./FictionPage";



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)



const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            <Route exact path="/upayment" render={props => <Upayment{...props}/>} />
            {/*<Route path="/user/orderhistory" render={props => (<CFade><OrderHistory/></CFade>)}/>*/}
            {/*<Route path="/user/children" render={props => (<CFade><Children/></CFade>)}/>*/}
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
