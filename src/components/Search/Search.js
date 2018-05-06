import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render () {
    return (
        <input
          placeholder='Search Lessons'
          className='searchInput'
        /> 
    )
  }
}

export default Search