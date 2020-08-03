import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss'
import Home from './pages/Home'
import Market from './pages/Market'
import Dashboard from './pages/Dashboard'
import { UserSpecialtyDetails } from './pages/UserSpecialtyDetails'
import SpecialtyDetails from './pages/SpecialtyDetails'
import { SliderPreviews } from './cmps/SliderPreviews'
import SpecialtyManage from './pages/SpecialtyManage'
import NavBar from './cmps/NavBar'
import {Footer} from './cmps/Footer'

function App() {
  return (
    <div className="App ">
      <NavBar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={SpecialtyDetails} exact path="/market/:sellerId" />
        <Route component={Market} path="/market" />
        <Route component={UserSpecialtyDetails} exact path="/dashboard/specialtyDetails/:userId" />
        <Route component={Dashboard} path="/dashboard/:section" />
        <Route component={SliderPreviews} path="/slider" />
        <Route component={SpecialtyDetails} path="/SpecialtyDetails" />
        <Route component={SpecialtyManage} path="/specialtyManage" />
      </Switch>
      <Footer/>
    </div>

  );
}

export default App;
