import React, { Component } from 'react';
import '../style/Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import Description from './Description' 
import Reviews from './Reviews' 
import Profile from './Profile' 
import GetStarted from './GetStarted' 



export default class Header extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <header>
        <section className="headerContainer">
          <article className='logo'>
            <img src={require("../assets/headerLogo.png")}/>
          </article>
          <nav>
            <li> <Link to="/howItWorks">How it works</Link></li>
            <li> <Link to="/reviews">Reviews</Link></li> 
            <li> <Link to="/profile">Log in</Link></li>
            <li className="headerGetStarted"> <Link to="/getStarted">Get Started</Link></li>
          </nav>
          <Switch>
            <Route path="/howItWorks" component={<Description/>}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/getStarted" component={GetStarted}/>            
          </Switch>
        </section>
      </header>
    )
  }
}

