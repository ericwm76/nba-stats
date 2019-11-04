import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import PlayerStats from '../PlayerStats/PlayerStats'

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/player/:id" component={PlayerStats} />
      </div>
    )
  }
};

export default App;