import React, { Component } from 'react';
import './HeaderProfile.css';
import { Link, Route, Switch } from 'react-router-dom';
import Description from '../Description/Description' 
import Reviews from '../Reviews/Reviews' 
import Profile from '../Profile/Profile' 
import GetStarted from '../GetStarted/GetStarted' 
import Notes from '../Profile/Profile';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (lesson) => {
    this.props.lessonChange(lesson);
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
            <li className="lessonsLink"><Link to="/profile">Lessons</Link>
            <ul>
            <li className="lesson1" onClick={() => this.handleClick('lesson1')} ><Link to="/profile">Lesson1</Link></li>
            <li className="lesson2" onClick={() => this.handleClick('lesson2')} ><Link to="/profile">Lesson2</Link></li>
            </ul>
            </li>
            <li className="headerGetStarted"> <Link to="/getStarted">Get Started</Link></li>
          </nav>
        </section>
      </header>
    )
  }
}

