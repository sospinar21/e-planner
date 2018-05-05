import { Router, Route, IndexRoute } from 'react-router'
import React from 'react'

const menu = () => {
  return (
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
  )
}

export default menu