import React, { Component } from 'react'
import './Notes.css';
import * as firebase from 'firebase'
import 'firebase/database'

class Notes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      notes: '', 
      user: ''
    }

    this.firebaseRef = firebase.database().ref();
  }

  handleInputChange = event => {
    this.firebaseRef.child(this.props.user.uid).set({ notes: event.target.value })
    event.preventDefault();
    this.setState({
      notes: event.target.value
    })
  };

  render() {
    return (
      <div className="notes">
        <textarea className="notes-form" onChange={this.handleInputChange}>
        
        </textarea> 
      </div>
    )
  }
}

export default Notes;