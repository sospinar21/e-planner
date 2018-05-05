import React, { Component } from 'react'
import './AddLessons.css'

class AddLessons extends Component {
  constructor () {
    super ()
  }

  render() {
    return (
      <div className='addLessons'> 
        <h4>Enter URL</h4>
        <div className="webflow-style-input">
          <input className="urlInput" type="url" placeholder="Enter URL"></input>
          <button type="submit"><i className="icon ion-android-arrow-forward"></i></button>
        </div>
        <div className='lessonsHr'>
         <span></span><span className="lessonsHrText">OR</span><span></span>
        </div>
        <h4>Copy and paste your lesson</h4>
        <textarea className='pasteLesson'></textarea>
      </div>
    )
  }
}

export default AddLessons