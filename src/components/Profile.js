import React from 'react'
import { Link, Route } from "react-router-dom";
import "../style/Profile.css"

const Profile = ({match}) => {
  return (
    <div className ='testing'>
      <div class = 'searchBar'>
        <input type="text" name="Search" placeholder="Search"></input>
        <article class='mod'>
          <ul class = 'modList'>
            <div class = 'dropDown active'>
              <li class = 'mod1'> Mod 1</li>
              <div class='dropDownContent'>
                <a href="#">Design I</a>
                <a href="#">HTML I</a>
                <a href="#">HTML II</a>
                <a href="#">Aria: Roles, States, Properties</a>
                <a href="#">CSS Jigsaw</a>
                <a href="#">Intro To Responsive</a>
                <a href="#">CSS Layout Challenges</a>
              </div>
            </div>
          
          <div class = 'dropDown'>
              <li class = 'mod2'> Mod 2</li>
              <div class='dropDownContent'>
                <a href="#">ESLint Basics</a>
                <a href="#">Refactoring Guidelines</a>
                <a href="#">Git Review: Forking vs. Cloning</a>
                <a href="#">Introduction to UI/UX; Empathy in Design</a>
                <a href="#">Introduction to Personas</a>
                <a href="#">Introduction to Canvas</a>
                <a href="#">Introduction to Sass</a>
              </div>
            </div>

          <div class = 'dropDown'>
              <li class = 'mod1'> Mod 3</li>
              <div class='dropDownContent'>
                <a href="#">ESLint Basics</a>
                <a href="#">Refactoring Guidelines</a>
                <a href="#">Git Review: Forking vs. Cloning</a>
                <a href="#">Introduction to UI/UX; Empathy in Design</a>
                <a href="#">Introduction to Personas</a>
                <a href="#">Introduction to Canvas</a>
                <a href="#">Introduction to Sass</a>
              </div>
            </div>

          <div class = 'dropDown last'>
              <li class = 'mod1'> Mod 4</li>
              <div class='dropDownContent'>
                <a href="#">ESLint Basics</a>
                <a href="#">Refactoring Guidelines</a>
                <a href="#">Git Review: Forking vs. Cloning</a>
                <a href="#">Introduction to UI/UX; Empathy in Design</a>
                <a href="#">Introduction to Personas</a>
                <a href="#">Introduction to Canvas</a>
                <a href="#">Introduction to Sass</a>
              </div>
            </div>
          </ul>
        </article>
        
      </div>
      <main>
        <iframe class ='lesson' src="http://frontend.turing.io/lessons/module-1/design-1.html"></iframe>
        <div class ='notes'> 
          <div class = 'notesMenu'>
            <div class = 'pointer linkTab'>Links</div>
            <div class = 'pointer snippetTab'>Snippets</div>
            <div class = 'pointer keyTab'>Keywords</div>
          </div>
          <div class='notesBox' contenteditable="true"> 
          </div>  
      
          <div class='link'>
            <input class ='linkInput' type="url" name="" placeholder="Enter URL"></input>
            <button class='saveUrl'>Save</button>
            <ul class = 'links'>
              <li class='removeBullet'><h5>Links</h5></li>
            </ul>
          </div>
          <div class='snippet'>
            <input class ='snippetInput in' type="text" name="" placeholder="Save snippet"></input>
            <button class='saveSnippet'>Save</button>
            <ul class = 'snippets'>
              <li class='removeBullet'><h5>Snippets</h5></li>    
            </ul>
          </div>
          <div class='keyword'>
            <input class ='keyInput in' type="text" name="" placeholder="Enter Keywords"></input>
            <button class='saveKey'>Save</button>
            <ul class = 'keywords'>  
              <li class='removeBullet'><h5>Keywords</h5></li>     
            </ul>
          </div>
        
        </div>
      </main>
      {" "}
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
    </div>
  )
}

export default Profile