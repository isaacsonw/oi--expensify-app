import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import NotFoundPage from '../components/NotFoundPage'
import Help from '../components/Help'
import Login from '../components/Login'
import Header from '../components/Header'
import AppDashBoard from '../components/AppDashBoard'
import SignUp from '../components/SignUp';

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <div className="header__flex">
      <Header />
    </div>
    <div className="main">
    <div className="app">
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/add" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help}  />
        <Route path="/dashboard" component={AppDashBoard}  />
        <Route path="/login" component={Login}  />
        <Route path="/sign-up" component={SignUp}  />
        <Route  component={NotFoundPage} />
      </Switch>
      <div className="web">
      <a href='#' className='webA'>
        <i className="fas fa-globe">
        </i>
        <span>www.oidesign.com</span>
      </a>
    </div>
      </div>
      </div>
    </div>
  </BrowserRouter>
)

export default AppRouter