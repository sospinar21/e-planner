import React, { Component } from 'react';
import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import Description from '../Description/Description' 
import Reviews from '../Reviews/Reviews' 
import Profile from '../Profile/Profile' 
import GetStarted from '../GetStarted/GetStarted' 



export default class Header extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <header>
        <section className="headerContainer">
          <article className='logo'>
          <Link to="/">
            <img src={require("../../assets/headerLogo.png")}/>
          </Link>
          </article>
          <nav>
            <li> <Link to="/howItWorks">How it works</Link></li>
            <li> <Link to="/reviews">Reviews</Link></li> 
            <li> <Link to="/profile">Log in</Link></li>
            <li className="headerGetStarted"> <Link to="/getStarted">Get Started</Link></li>
          </nav>
        </section>
      </header>
    )
  }
}

