import React, { Component } from 'react';
import '../style/Header.css';

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
            <a href="#">How it works</a>
            <a href="#">Reviews</a> 
            <a href="profile.html">Log in</a>
            <a className="headerGetStarted">Get Started</a>
          </nav>
        </section>
      </header>
    )
  }
}

