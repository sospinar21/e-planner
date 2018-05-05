import React, { Component } from 'react'
import './Lessons.css'
import AddLessons from '../AddLessons/AddLessons'

class Lessons extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


render() {
  return (
    <div className='lessons'>
      <AddLessons />
    </div>
  )
}

}



export default Lessons 