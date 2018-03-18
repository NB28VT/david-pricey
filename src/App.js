import React, { Component } from 'react';
import PlayerWindow from './components/PlayerWindow';
import "./App.css";
const porcelloData = {
  name: "Rick Porcello",
  salary: 20125000,
  era: 4.65,
  games_played: 33,
  innings_pitched: 203,
  strikeouts: 181,
  image_path: "rick-porcello"
}

const pomeranzData = {
  name: "Drew Pomeranz",
  salary: 4450000,
  era: 3.32,
  games_played: 32,
  innings_pitched: 173,
  strikeouts: 174,
  image_path: "drew-pomeranz"
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player1: porcelloData,
      player2: pomeranzData
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container_fluid">
          <div className="row top-row"></div>
          <div className="row player-selection-row">
            <PlayerWindow playerData={this.state.player1}/>
            <PlayerWindow playerData={this.state.player2}/>
          </div>
          <div className="row bottom-row"></div>
        </div>
      </div>
    );
  }
}

export default App;
