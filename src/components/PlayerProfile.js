import React, { Component } from 'react';
import {Table} from "react-bootstrap";
// import mockProfilePhoto from "../images/rick-porcello.jpg"

class PlayerProfile extends Component {

  getProfilePhoto() {
    return `/images/${this.props.playerData.image_path}.jpg`
  }

  // name: "DrewPomeranz",
  // salary: 4450000,
  // era: 3.32,
  // games_played: 32,
  // innings_pitched: 173,
  // strikeouts: 174,
  // image_path: "drew-pomeranz"


  costPerGame() {
    return "$ " + (this.props.playerData.salary / this.props.playerData.games_played).toFixed(2);
  }

  costPerInning(){
  }

  costPerStrikeout(){
  }

  render() {
    return(
      <Table>
        <tbody>
          <tr className="player-photo">
            <td>
              <img src={this.getProfilePhoto()}></img>
            </td>
            <td>
              <h1>{this.props.playerData.name}</h1>
            </td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>{this.props.playerData.salary}</td>
          </tr>
          <tr>
            <td>ERA</td>
            <td>{this.props.playerData.era}</td>
          </tr>
          <tr>
            <td>Cost Per Game</td>
            <td>{this.costPerGame()}</td>
          </tr>
          <tr>
            <td>Cost Per Inning</td>
            <td>{this.costPerInning()}</td>
          </tr>
          <tr>
            <td>Cost Per Strikeout</td>
            <td>{this.costPerStrikeout()}</td>
          </tr>
        </tbody>
      </Table>
    )
  }

}

export default PlayerProfile;
