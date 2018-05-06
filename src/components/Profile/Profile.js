import React from 'react'
import { Link, Route } from "react-router-dom";
import "./Profile.css"
import Lessons from '../Lessons/Lessons'
import Notes from '../Notes/Notes'
import Search from '../Search/Search'
import '../../style/reset.css'


const Profile = ({match}) => {
  return (
    <div className ='testing'>
      <main>
        <Search />
        <Lessons />
        <Notes />
      </main>
    </div>
  )
}

export default Profile