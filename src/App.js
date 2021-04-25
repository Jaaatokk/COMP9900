import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"/>
  </div>
)

// Containers


// Pages
// const Start = React.lazy(() => import('./views/pages/user_page/welcome'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const AdminPage = React.lazy(()=>import('./views/pages/admin_page/Homepage'));
const UserPage = React.lazy(()=>import('./views/pages/user_page/Homepage'));
const Home = React.lazy(()=>import('./views/pages/cart/Home'));
const Details = React.lazy(()=>import('./views/pages/detailpage/details'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const UPayment = React.lazy(() => import('./views/pages/user_page/Upayment'));
const OrderHistory = React.lazy(() => import('./views/pages/user_page/Ohistory'));
const Children = React.lazy(() => import('./views/pages/user_page/ChildPage'));
const Cart = React.lazy(() => import('./views/pages/cart/Home'));
const Userinfo = React.lazy(() => import('./views/pages/user_page/UserInfo'));
const Homepage = React.lazy(() => import('./views/pages/user_page/Homepage'));
const Statistic = React.lazy(() => import('./views/pages/admin_page/Statistic'));
const AllHistory = React.lazy(() => import('./views/pages/admin_page/AllOrder'));
const Upload = React.lazy(() => import('./views/pages/admin_page/upload'));
const MainPage = React.lazy(() => import('./views/pages/user_page/Mainpage'));
const ViewProduct = React.lazy(() => import('./views/pages/admin_page/ViewAllItem'));
// const SearchByAuthor = React.lazy(() => import('./views/pages/user_page/SearchByAuthor'));
const SearchNameResult = React.lazy(() => import('./views/pages/user_page/SearchNameResult'));
// const Gege = React.lazy(() => import('./views/pages/user_page/Test'));
const ReadyPay = React.lazy(() => import('./views/pages/user_page/Pay'));
const ItemDetail = React.lazy(() => import('./views/pages/detailpage/details'));
const CartTest = React.lazy(() => import('./views/pages/cart/CartTest'));
const ReBuy = React.lazy(() => import('./views/pages/user_page/ReBuy'));




class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {/*<Route exact path="/welcome" name="Login Page" render={props => <Start {...props}/>} />*/}
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/admin" name="Admin Page" render={props => <AdminPage {...props}/>} />
              <Route exact path="/user" name="User Page" render={props => <UserPage {...props}/>} />
              <Route exact path="/detailpage" name="detailpage Page" render={props => <Details {...props}/>} />
              <Route exact path="/cart" name="Home Page" render={props => <Home {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/upayment" name="User Payment" render={props => <UPayment {...props}/>} />
              <Route exact path="/ohistory" name="order history" render={props => <OrderHistory {...props}/>} />
              <Route exact path="/childrenbook" name="children book" render={props => <Children {...props}/>} />
              <Route exact path="/cart" name="children book" render={props => <Cart {...props}/>} />
              <Route exact path="/userinfo" name="user info" render={props => <Userinfo {...props}/>} />
              <Route exact path="/homepage" name="user home page" render={props => <Homepage {...props}/>} />
              <Route exact path="/statistic" name="statistic page" render={props => <Statistic {...props}/>} />
              <Route exact path="/allhistory" name="statistic page" render={props => <AllHistory {...props}/>} />
              <Route exact path="/upload" name="statistic page" render={props => <Upload {...props}/>} />
              <Route exact path="/mainpage" name="main page" render={props => <MainPage {...props}/>} />
              <Route exact path="/viewproduct" name="product page" render={props => <ViewProduct {...props}/>} />
              <Route exact path="/searchnr" name="product page" render={props => <SearchNameResult {...props}/>} />
              <Route exact path="/readypay" name="readyPay page" render={props => <ReadyPay {...props}/>} />
              <Route exact path="/itemdetail" name="readyPay page" render={props => <ItemDetail{...props}/>} />
              <Route exact path="/carttest" name="readyPay page" render={props => <CartTest{...props}/>} />
              <Route exact path="/itemrecommend" name="readyPay page" render={props => <ReBuy{...props}/>} />
              {/*<Route exact path="/test" name="product page" render={props => <Gege {...props}/>} />*/}
              <Route path="/" name="Home" render={props => <MainPage {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
