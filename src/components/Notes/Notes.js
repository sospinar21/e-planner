import React, { Component } from 'react'
import './Notes.css';
import * as firebase from 'firebase'
import 'firebase/database'

class Notes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      notes: '',
      lesson: this.props.lesson
    }

    this.firebaseRef = firebase.database().ref();
    this.userNotesRef = firebase.database().ref().child(this.props.user.uid).child('notes')
  }

  componentDidMount = (lesson) => {
    let userNotesRef = this.firebaseRef.child('users').child(this.props.user.uid).child('lessons').child('HTML Canvas').child('notes')
    let notesFormContent = document.getElementsByClassName('notes-form');
    userNotesRef.on('value', (snapshot) => {
      const retrievedNotes = snapshot.val();
      this.setState({notes: retrievedNotes});
    })
  };

  handleInputChange = (event) => {
    console.log('asdfasd')
    event.preventDefault();
    this.firebaseRef.child('users').child(this.props.user.uid).child('lessons').child('Binary Search Tree').update({ notes: event.target.value })
    this.setState({
      notes: event.target.value
    })
  };

  render() {
    return (
      <div className="notes">
        <h1>Binary Search Tree Notes</h1>
        <textarea className="notes-form" onChange={this.handleInputChange} value={this.state.notes}>
        </textarea> 
      </div>
    )
  }
}

export default Notes;