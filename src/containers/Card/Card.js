import React from 'react';
import { Link } from 'react-router-dom';
import { getPlayerSeasonAvgs } from '../../apiCalls/apiCalls';

export const Card = ({ player }) => {

  return (
    <div>
      <h3>Name: {player.first_name} {player.last_name}</h3>
      <h3>Team: {player.team.full_name}</h3>
      <h3>Height: {player.height_feet}'{player.height_inches}"</h3>
      <h3>Weight: {player.weight_pounds} lbs</h3>
      <h3>Position: {player.position}</h3>
      <div className="card-footer">
        <Link to={`/player/${player.id}`}>
          <button>View Stats</button>
        </Link>
        <button>X</button>
      </div>
    </div>
  )
}