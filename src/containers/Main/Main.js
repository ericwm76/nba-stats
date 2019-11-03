import './Main.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../../actions';
import PropTypes from 'prop-types';

export const Main = () => {


  return (
    <div className="Main">
      
    </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Main)