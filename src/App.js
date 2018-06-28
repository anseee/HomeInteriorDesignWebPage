import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js';
import MainTopBackgroundView from './MainTopBackgroundView.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Menu />
       <MainTopBackgroundView />
      </div>
    );
  }
}

export default App;
