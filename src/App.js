import React, { Component } from 'react';
import './style/App.css';
import MainPage from './components/Main.js';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Description from './components/Description';
import Reviews from './components/Reviews';
import Profile from './components/Profile';
import GetStarted from './components/GetStarted';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
            <Route exact path="/" component={MainPage}/>
            <Route path="/howItWorks" component={Description}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/getStarted" component={GetStarted}/>            
      </div>
    );
  }
}

export default App;
