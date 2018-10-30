import React, { Component } from 'react';
import Board from './board'
import './App.css';
import Header from './header'
import Footer from './footer'
import Reset from './resetButton'

class App extends Component {

  render() {
    return (
      <div className="background-app">

        <div className="header-container">
          <Header className="header"/>
        </div>

        <div className="board">
          <Board />
        </div>

        <div className="reset-button">
          <Reset />
        </div>

        <div className="footer-container">
          <Footer className="footer"/>
        </div>

      </div>
    );
  }
}

export default App;
