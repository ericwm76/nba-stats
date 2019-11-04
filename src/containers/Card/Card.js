import './Card.scss'
import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ player }) => {

  return (
    <div className="Card">
      <h3>Name: {player.first_name} {player.last_name}</h3>
      <p>Team: {player.team.full_name}</p>
      <p>Height: {player.height_feet}'{player.height_inches}"</p>
      <p>Weight: {player.weight_pounds} lbs</p>
      <p>Position: {player.position}</p>
      <div className="card-footer">
        <Link to={`/player/${player.id}`}>
          <button>View Stats</button>
        </Link>
        <button>X</button>
      </div>
    </div>
  )
}