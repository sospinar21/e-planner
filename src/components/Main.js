import React from 'react'
import '../style/Main.css'

const MainPage = () => {
  return (
    <div>
      <div className = 'menu'>
        <div className = 'logo'>
          <a href="index.html"> <img src="./images/turing-book-logo.png"/></a>
        </div>
        <ul className = 'menuList'>
          <li> How it works</li>
          <li> Reviews</li> 
          <li><a href="profile.html">Log in</a></li> 
          <li> 
            <button className ='signUp'> Get Started </button>
          </li>  
        </ul>
      </div>
      <header>
        <h1 className ='mainTitle'>Information that matters</h1>
        <h3 className = 'slogan'>A place to store notes, links and snippets</h3>
        <button>Get started</button>
      </header>
      <div className = 'description img'>
      </div>
      <div className = 'description'>
        <ul>
          <li>Download lessons</li>
          <li>Save your notes</li>
          <li>Store important links</li>
          <li>Save snippets and examples</li>
          <li>Easy access</li>
        </ul>
      </div>
      <div className = 'clients'>
        <h2>Trusted by Turing students</h2>
        <div className ='people'>
          <div className = 'student'>
            <img src='../images/0P5A9182.jpg'/>
            <h4>Steph Ospina</h4>
          </div>
          <div className = 'student'>
            <img src='../images/tyler-mcnamara.jpg'/>
            <h4>Tyler McNamara</h4>
          </div>
          <div className = 'student'>
            <img src='../images/dan-alvarez.jpg'/>
            <h4>Dan Alvarez</h4>
          </div>
          <div className = 'student'>
            <img src='../images/jorge.jpg'/>
            <h4>Jorge Perez</h4>
          </div>
        </div>
      </div>
      <div className = 'getStarted'>
        <h5>Get started today</h5>
        <button>Get Started</button>
      </div>
    </div>

  )
}

export default MainPage;