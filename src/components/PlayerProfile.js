import React, { Component } from 'react';
import {Table} from "react-bootstrap";
import NumberFormat from 'react-number-format';

class PlayerProfile extends Component {

  getProfilePhoto() {
    return `/images/${this.props.playerData.image_path}.jpg`
  }

  costPerGame() {
    return "$ " + (this.props.playerData.salary / this.props.playerData.games_played).toFixed(2);
  }

  costPerInning(){
    return "$ " + (this.props.playerData.salary / this.props.playerData.innings_pitched).toFixed(2);
  }

  costPerStrikeout(){
    return "$ " + (this.props.playerData.salary / this.props.playerData.strikeouts).toFixed(2);
  }

  determineCostClass(){
    // TODO: dynamically caluclate these in top level components
    if (this.props.playerData.name == "Rick Porcello") {
      return "price-y-er";
    } else {
      return "less-price-y-er";
    }
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
            <td>
              <NumberFormat value={this.props.playerData.salary} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </td>
          </tr>
          <tr>
            <td>ERA</td>
            <td>{this.props.playerData.era}</td>
          </tr>
          <tr>
            <td>Cost Per Game</td>
            <td className={this.determineCostClass()}>
              <NumberFormat value={this.costPerGame()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </td>
          </tr>
          <tr>
            <td>Cost Per Inning</td>
            <td className={this.determineCostClass()}>
              <NumberFormat value={this.costPerInning()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </td>
          </tr>
          <tr>
            <td>Cost Per Strikeout</td>
            <td className={this.determineCostClass()}>
              <NumberFormat value={this.costPerStrikeout()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }

}

export default PlayerProfile;
