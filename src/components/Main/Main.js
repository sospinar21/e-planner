import React, { Component } from "react"
import "./Main.css";
import HeaderHome from '../HeaderHome/HeaderHome';


class MainPage extends Component {
  constructor({googleLogin, githubLogin, emailLogin}) {
    super();
  }

  render() {
  return (
    <div>
      <HeaderHome />
      <section className="heroImage">
        <section className="signUpForm">
          <h1>Sign Up</h1>
          <article className="googleBtn signUpBtn" onClick={() => this.props.googleLogin()}>
          </article>
          <article className="gitHubBtn signUpBtn" onClick={() => this.props.githubLogin()}>
          </article>
          <div className="signUpHr">
          <span></span><span className="signUpHrText">OR</span><span></span>
          </div>
          <article className="emailBtn signUpBtn" onClick={() => this.props.emailLogin()}>
          </article>
        </section>
      </section>
      <section className="homeNotesLessons">
        <img src={require("../../assets/laptop-img.jpg")}/>
        <div>
        <h2>Your notes & lessons in one place</h2>
        <p>Get video posted to internet for chasing red dot grab pompom in mouth and put in water dish so knock dish off table head butt cant eat out of my own dish i just saw other cats inside the house and nobody ask me before using my litter box leave dead animals as gifts.</p>
        <a href="#">Learn More</a>
        </div>
      </section>
      {/* <div className = "clients">
        <h2>Trusted by Turing students</h2>
        <div className ="people">
          <div className = "student">
            <h4>Steph Ospina</h4>
            <img src="./../images/0P5A9182.jpg"/>
          </div>
          <div className = "student">
            <img src="./../images/tyler-mcnamara.jpg"/>
            <h4>Tyler McNamara</h4>
          </div>
          <div className = "student">
            <img src="./../images/dan-alvarez.jpg"/>
            <h4>Dan Alvarez</h4>
          </div>
          <div className = "student">
            <img src="./../images/jorge.jpg"/>
            <h4>Jorge Perez</h4>
          </div>
        </div>
      </div> */}
      {/* <div className = "getStarted">
        <h5>Get started today</h5>
        <button>Get Started</button>
      </div> */}
    </div>

  )
}
}

export default MainPage;