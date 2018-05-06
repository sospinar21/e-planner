import React, { Component } from 'react'
import './Lessons.css'
import AddLessons from '../AddLessons/AddLessons'
import Iframe from 'react-iframe'

class Lessons extends Component {
  constructor() {
    super()
    this.state = {
      urlInput: ''
    }
  }

  showInput = (input) => {
    this.setState({
      urlInput: input
    })
    // return this.url
  }


render() {
  console.log(this.url)
  return (
    <div className='lessons'>
      <AddLessons showInput={this.showInput}/>
      <iframe 
        className='lessonIframe'
        src= {this.state.urlInput}
      ></iframe>
    </div>
  )
}

}



export default Lessons 