import React, { Component } from 'react'
import './AddLessons.css'

class AddLessons extends Component {
  constructor (props) {
    super (props)
    this.state = {
      urlInput : ''
    }
  }

  inputHandle = (ev) => {
    let inputValue = ev.target.value
    this.setState({
      urlInput : inputValue
    })
  }

  submitInput = () => {
    console.log(this.state.urlInput)
    this.props.showInput(this.state.urlInput)
  }
  

  render() {
    return (
      <div className='addLessons'> 
        <h4>Enter URL</h4>
        <div className="webflow-style-input">
          <input className="urlInput" 
            type="url" 
            placeholder="Enter URL"
            onChange={(ev) => this.inputHandle(ev)}
          />
          <button type="submit"
          onClick={this.submitInput}>
          </button>
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