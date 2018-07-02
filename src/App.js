import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js';
import MainTopBackgroundView from './MainTopBackgroundView.js';
import MainMiddleBackgroundView from './MainMiddleBackgroundView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Menu />
       <MainTopBackgroundView />
       <MainMiddleBackgroundView />
      </div>
    );
  }
}

export default App;
