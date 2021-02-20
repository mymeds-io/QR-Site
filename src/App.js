import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomeComponent from './components/Home/HomeComponent';
import SignUpComponent from './components/SignUp/signUpComponent';
import MedListComponent from './components/MedList/MedListComponent';
import MedListQRComponent from './components/MedListQR/MedListQRComponent';
import TrackedComponent from './components/Tracked/TrackedComponent';
import MFAEnrollComponent from './components/MFA/MFAEnrollComponent';
import ForgotPassComponent from './components/Forgot/ForgotPassComponent';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/sign-up" component={SignUpComponent} />
          <Route exact path="/mfa-enroll" component={MFAEnrollComponent} />
          <Route exact path="/user-meds" component={MedListComponent} />
          <Route exact path="/user-meds-qr/:id/:token" component={MedListQRComponent} />  
          <Route exact path="/tracked" component={TrackedComponent} />
          <Route exact path="/forgot-password" component={ForgotPassComponent} />              
        </Switch>
      </div>
    )
  }
}

export default App;
