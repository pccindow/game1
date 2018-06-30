import React from 'react';
//import ReactDOM from 'react-dom';
//import React, { Component } from 'react';
import './App.css';
import Countdown from './countdown.js';
import ListWords from './listwords.js';
import Input from './input.js';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    title: 'Entre les mots le plus rapidement possible',
    game: false,
    seconds: 60
    }
  this.startGame = this.startGame.bind(this);
  }

  changeValue(seconds){
    this.setState({seconds});
  }

  startGame() {
    this.setState({
      game: true
    });
  }

  render() {
    return (
      <div id="box-content">
        <h1> {this.state.title} </h1>
        <button onClick={this.startGame}>
        Nouveau Jeu
        </button>
        <Countdown seconds={this.state.seconds}/>
        <ListWords />
        <br />
        <Input />
      </div>
    );
  }
}

export default App;
