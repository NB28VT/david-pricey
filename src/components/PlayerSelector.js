import React, { Component } from 'react';

class PlayerSelector extends Component {
  // Constructor to build options


  render() {
      return(
        <div className="player-selector">

          <div class="form-group">
            <label for="team">Select Team:</label>
            <select class="form-control" id="team">
              <option value="Boston Red Sox">Boston Red Sox</option>
            </select>
          </div>

          <div class="form-group">
            <label for="team">Select Pitcher:</label>
            <select class="form-control" id="team">
              <option value="Rick Porcello">Rick Porcello</option>
            </select>
          </div>
        </div>
      )
  }

}

export default PlayerSelector
