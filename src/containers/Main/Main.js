import './Main.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../../actions';
import { Card } from '../Card/Card'
import PropTypes from 'prop-types';

export const Main = ({ players }) => {
  let playerCards = players.map(player => {
    return (<Card 
      player={player}
      key={player.id}
    />)
  })

  return (
    <div className="Main">
      {playerCards}
      <button>Compare Players</button>
    </div>
  )
}

const mapStateToProps = ({ players }) => ({
  players
})

export default connect(mapStateToProps)(Main)