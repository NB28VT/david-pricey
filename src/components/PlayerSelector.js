import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, Table} from "react-bootstrap";

class PlayerSelector extends Component {

  render() {
    return(
      <Table>
        <tbody>
          <tr>
            <td>
              <FormGroup controlId="formControlsSelect">
               <ControlLabel>Team</ControlLabel>
               <FormControl componentClass="select" placeholder="select">
                 <option value="Boston Red Sox">Boston Red Sox</option>
                 <option value="other">...</option>
               </FormControl>
             </FormGroup>
            </td>
          </tr>
          <tr>
            <td>
              <FormGroup controlId="formControlsSelect">
               <ControlLabel>Pitcher</ControlLabel>
               <FormControl componentClass="select" placeholder="select">
                 <option value="Rick Porcello">Rick Porcello</option>
                 <option value="Drew Pomeranz">Drew Pomeranz</option>
               </FormControl>
             </FormGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }



}

export default PlayerSelector
