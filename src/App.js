import React, { Component } from 'react';
import PlayerSelector from './components/PlayerSelector';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container_fluid">
          <div className="row top-row"></div>
          <div className="row player-selection-row">
            <PlayerSelector/>
            <PlayerSelector/>
          </div>
          <div className="row bottom-row"></div>
        </div>
      </div>
    );
  }
}

export default App;
