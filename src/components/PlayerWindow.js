import React, { Component } from 'react';
import PlayerSelector from "./PlayerSelector"
import PlayerProfile from "./PlayerProfile"

class PlayerWindow extends Component {
  // Constructor to build options
  render() {
      return(
        <div className="player-window">
          <PlayerSelector/>
          <PlayerProfile playerData={this.props.playerData}/>
        </div>
      )
  }
}

export default PlayerWindow;
