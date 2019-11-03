import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayerSeasonAvgs } from '../../apiCalls/apiCalls' 

export class PlayerStats extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    const getStats = async (e, id) => {
      e.preventDefault();
      let avgs = await getPlayerSeasonAvgs(id);
      console.log(avgs)
      return avgs;
    } 
  }



  render() {
    const { id } = this.props.match.params;
    const { players } = this.props;
    const player = players.find(player => 
      player.player_id === parseInt(id)
    );

    return (
      <table>
      <thead>
        <tr>
          <th colspan="2">The table header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
      </tbody>
    </table>
  )
}
}

const mapStateToProps = ({players}) => ({
  players
})

export default connect(mapStateToProps)(PlayerStats)