import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PlayerStats.scss';
import { getPlayerSeasonAvgs } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';


export class PlayerStats extends Component {
  constructor() {
    super();
    this.state = {
      playerAvgs: {}
    }
  }

  componentDidMount = async () => {
    console.log(this.props)
    const { id } = this.props.match.params;
    const { players } = this.props;
    const player = players.find(player => 
      player.id === parseInt(id)
    );
    
    let avgs = await getPlayerSeasonAvgs(player.id);
    this.setState({playerAvgs: avgs[0]});
    console.log(this.state)
  }



  render() {
    const { playerAvgs } = this.state;

    return (
      <table>
        <tbody>
          <tr className="top-row">
            <td>GP</td>
            <td>MPG</td>
            <td>FGM</td>
            <td>FGA</td>
            <td>FG%</td>
            <td>3PM</td>
            <td>3PA</td>
            <td>3P%</td>
            <td>FTM</td>
            <td>FTA</td>
            <td>FT%</td>
            <td>ORB</td>
            <td>DRB</td>
            <td>TRB</td>
            <td>AST</td>
            <td>STL</td>
            <td>BLK</td>
            <td>TUR</td>
            <td>PF</td>
            <td>PTS</td>
          </tr>
          <tr className="bottom-row">
            <td>{playerAvgs.games_played}</td>
            <td>{playerAvgs.min}</td>
            <td>{playerAvgs.fgm}</td>
            <td>{playerAvgs.fga}</td>
            <td>{playerAvgs.fg_pct}</td>
            <td>{playerAvgs.fg3m}</td>
            <td>{playerAvgs.fg3a}</td>
            <td>{playerAvgs.fg3_pct}</td>
            <td>{playerAvgs.ftm}</td>
            <td>{playerAvgs.fta}</td>
            <td>{playerAvgs.ft_pct}</td>
            <td>{playerAvgs.oreb}</td>
            <td>{playerAvgs.dreb}</td>
            <td>{playerAvgs.reb}</td>
            <td>{playerAvgs.ast}</td>
            <td>{playerAvgs.stl}</td>
            <td>{playerAvgs.blk}</td>
            <td>{playerAvgs.turnover}</td>
            <td>{playerAvgs.pf}</td>
            <td>{playerAvgs.pts}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export const mapStateToProps = ({players}) => ({
  players
})

export default connect(mapStateToProps)(PlayerStats)

PlayerStats.propTypes = {
  players: PropTypes.array.isRequired,
  match: PropTypes.object
}