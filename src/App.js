import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomeComponent from './components/Home/HomeComponent';
import SignUpComponent from './components/SignUp/SignUpComponent';
import MedListComponent from './components/MedList/MedListComponent';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/sign-up" component={SignUpComponent} />
          <Route exact path="/user-meds" component={MedListComponent} />          
        </Switch>
      </div>
    )
  }
}

export default App;
