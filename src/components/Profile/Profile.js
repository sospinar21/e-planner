import React, { Component } from 'react'
import { Link, Route } from "react-router-dom";
import "./Profile.css"
import Lessons from '../Lessons/Lessons'
import Notes from '../Notes/Notes'
import Search from '../Search/Search'
import '../../style/reset.css'
import HeaderProfile from '../HeaderProfile/HeaderProfile';

class Profile extends Component { 
  constructor({ user, db }) {
    super();
    this.state = {
      lesson: null
    }
  }

  handleLessonChange = (lessonName) => {
    this.setState({lesson: lessonName})
  }

  render() {
    return (
      <div className ='testing'>
        <HeaderProfile lessonChange={this.handleLessonChange} />
        <main>
          <Search />
          <Lessons />
          <Notes db={this.props.db} user={this.props.user} lesson={this.state.lesson} notes={this.state.notes} />
        </main>
      </div>
    )
}
}

export default Profile