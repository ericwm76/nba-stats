import './NavBar.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../../actions';
import PropTypes from 'prop-types';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      playerName: ""
    }
  }

  handleChange = (e) => {
    this.setState({ playerName: e.target.value })
  }

  

  render = () => {
    return (
      <div className="NavBar">
        <h1>NBA Stats</h1>
        <form>
          <input type="text" placeholder="Search by player name" onChange={this.handleChange}/>
          <button onClick={() => this.searchPlayers}>Search</button> 
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)