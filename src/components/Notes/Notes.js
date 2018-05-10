import React, { Component } from 'react'
import './Notes.css';
import * as firebase from 'firebase'
import 'firebase/database'

class Notes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      notes: '',
      lesson: this.props.lesson,
      user: null
    }

    this.firebaseRef = firebase.database().ref();
  }

  componentDidMount = (lesson) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
            this.setState({ user: user.uid })
            const firebaseRef = firebase.database().ref();
            let userNotesRef = firebaseRef.child('users').child(user.uid).child('lessons').child('Binary Search Tree').child('notes')
            let notesFormContent = document.getElementsByClassName('notes-form');

            userNotesRef.once('value')
            .then((snapshot) => {
            return snapshot.val();
            }).then(data => 
            this.setState({notes: data}))
      } else {
       console.log('not signed in')
      }
    })
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.firebaseRef.child('users').child(this.state.user).child('lessons').child('Binary Search Tree').update({ notes: event.target.value })
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