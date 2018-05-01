import React, { Component } from 'react';
import './style/App.css';
import MainPage from './components/Main.js'
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
