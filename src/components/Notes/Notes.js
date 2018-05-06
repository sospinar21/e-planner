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
    this.userNotesRef = firebase.database().ref().child(this.props.user.uid).child('notes');
  }

  componentDidMount = () => {
    let notesFormContent = document.getElementsByClassName('notes-form');
    this.userNotesRef.once('value', (snapshot) => {
      const retrievedNotes = snapshot.val();
      this.setState({notes: retrievedNotes});
    })
  }

  handleInputChange = event => {
    this.firebaseRef.child(this.props.user.uid).set({ notes: event.target.value })
    event.preventDefault();
    this.setState({
      notes: event.target.value
    })
  };

  render() {
    let retrievedNotes;
    console.log(this.state.notes)
    return (
      <div className="notes">
        <textarea className="notes-form" onChange={this.handleInputChange} value={this.state.notes}>
        </textarea> 
      </div>
    )
  }
}

export default Notes;