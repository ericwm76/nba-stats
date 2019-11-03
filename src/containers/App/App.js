import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount = () => {

  }

  render = () => {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Main />} />
      </div>
    )
  }
};

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);