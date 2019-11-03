import './NavBar.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPlayers } from '../../actions';
import { searchByName } from '../../apiCalls/apiCalls'
import PropTypes from 'prop-types';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getPlayer = async (e) => {
    e.preventDefault();
    let players = await searchByName(this.state.firstName, this.state.lastName);
    this.props.setPlayers(players);
  }


  render = () => {
    return (
      <div className="NavBar">
        <h1>NBA Stats</h1>
        <form>
          <input type="text" name="firstName" placeholder="Player's first name" onChange={this.handleChange}/>
          <input type="text" name="lastName" placeholder="Player's last name" onChange={this.handleChange}/>
          <button onClick={this.getPlayer}>Search</button> 
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ players }) => ({
  players
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setPlayers
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)