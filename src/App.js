import React, { Component } from 'react';
import './style/App.css';
import MainPage from './components/Main/Main.js';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Description from './components/Description/Description';
import Reviews from './components/Reviews/Reviews';
import Profile from './components/Profile/Profile';
import GetStarted from './components/GetStarted/GetStarted';
import { DB_CONFIG } from './components/config/config';
import firebase from 'firebase/app'
import 'firebase/database'



class App extends Component {
  constructor() {
    super()

    this.state = {
      users: []
    }

    this.app = firebase.initializeApp(DB_CONFIG)
    this.database = this.app.database().ref().child('users')
  }

  // addUser = () => {
  //   const usersList = this.state.users
  //   // this.database.on('childAdded', snap = () => {
  //     // usersList.push({
  //       // id: snap.key,
  //       // userInfo : snap.val().userInfo
  //     })

  //     this.setState({
  //       users : usersList
  //     })
  //   })
  // }

  addUserToDb = (user) => {
    this.database.push().set({ userContent: user })
  }

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
