import React from "react"
import "../style/Main.css"

const MainPage = () => {
  return (
    <div>
      <section className="heroImage">
        <section className="signUpForm">
          <h1>Sign Up</h1>
          <article className="googleBtn signUpBtn">
          </article>
          <article className="gitHubBtn signUpBtn">
          </article>
          <div className="signUpHr">
          <span></span><span className="signUpHrText">OR</span><span></span>
          </div>
          <article className="emailBtn signUpBtn">
          </article>
        </section>
      </section>
      <section className="homeNotesLessons">
        <img src={require("../assets/laptop-img.jpg")}/>
        <div>
        <h2>Your notes & lessons in one place</h2>
        <p>Get video posted to internet for chasing red dot grab pompom in mouth and put in water dish so knock dish off table head butt cant eat out of my own dish i just saw other cats inside the house and nobody ask me before using my litter box leave dead animals as gifts.</p>
        <a href="#">Learn More</a>
        </div>
      </section>
      <div className = "clients">
        <h2>Trusted by Turing students</h2>
        <div className ="people">
          <div className = "student">
            <img src="../images/0P5A9182.jpg"/>
            <h4>Steph Ospina</h4>
          </div>
          <div className = "student">
            <img src="../images/tyler-mcnamara.jpg"/>
            <h4>Tyler McNamara</h4>
          </div>
          <div className = "student">
            <img src="../images/dan-alvarez.jpg"/>
            <h4>Dan Alvarez</h4>
          </div>
          <div className = "student">
            <img src="../images/jorge.jpg"/>
            <h4>Jorge Perez</h4>
          </div>
        </div>
      </div>
      <div className = "getStarted">
        <h5>Get started today</h5>
        <button>Get Started</button>
      </div>
    </div>

  )
}

export default MainPage;