import React, { Component } from 'react';
import './style/App.css';
import MainPage from './components/Main/Main.js';
import Header from './components/Header/Header';
import { Route, Link, Redirect, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import Description from './components/Description/Description';
import Reviews from './components/Reviews/Reviews';
import Profile from './components/Profile/Profile';
import GetStarted from './components/GetStarted/GetStarted';
import { DB_CONFIG } from './components/config/config';
import * as firebase from 'firebase'
import 'firebase/database'


class App extends Component {
  constructor({history}) {
    super()

    this.state = {
      user: null,
      loggedIn: false
    }

    this.app = firebase.initializeApp(DB_CONFIG)
    this.database = this.app.database().ref().child('users')
    this.googleLogin = this.googleLogin.bind(this);
    console.log(this.app)
  }

  googleLogin = () => {
    console.log(this.app)
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

      .then(result => {
          // const user = result.user;
            this.setState({
              user: result.user,
              loggedIn: true
            });
            this.props.history.push('/profile')
          // document.write(`Hello ${user.displayName}`);
      })
  }

  githubLogin = () => {
    const provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider)

      .then(result => {
          // const user = result.user;
          // console.log(user)
      })
  }


 emailLogin = () => {
    const provider = new firebase.auth.EmailAuthProvider();

    firebase.auth().signInWithPopup(provider)

      .then(result => {
          const user = result.user;
          console.log(user)
      })
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

  // addUserToDb = (user) => {
  //   this.database.push().set({ userContent: user })
  // }

  render() {
      return (
      <div className="App">
        <Header />
            <Route exact path="/" render={(props) => <MainPage {...props} googleLogin={this.googleLogin} githubLogin={this.githubLogin} emailLogin={this.emailLogin} />} />
            <Route path="/howItWorks" component={Description}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/profile" render={(props) => <Profile {...props} user={this.state.user} db={this.app} />} />
            <Route path="/getStarted" component={GetStarted}/>            
      </div>
    )
  }
}

export default withRouter(App)
