import './Main.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../../actions';
import { Card } from '../Card/Card';
import { Chart } from '../Chart/Chart';
import { getGameByGameStats } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      gameStats: []
    }
  }

  comparePlayers = async (e) => {
    e.preventDefault();
    
    try {
    await this.props.players.map(async (player) => {
        let stats = await getGameByGameStats(player.id); 
        let statsObj = { [player.id]: stats };
        this.setState({ gameStats: [...this.state.gameStats, statsObj] })
      })
    } catch(error) {  }
  }

  render () {
    const { gameStats } = this.state;
    const { players } = this.props;

    let playerCards = players.map(player => {
      return (<Card 
        player={player}
        key={player.id}
      />)
    })

    return (
      <div className="Main">
        <button onClick={this.comparePlayers}>Compare Players</button>
        {playerCards}
        {gameStats.length && gameStats.length === players.length && <Chart stats={gameStats} players={players}/>}
      </div>
    )
  }
}

export const mapStateToProps = ({ players }) => ({
  players
})

export default connect(mapStateToProps)(Main)