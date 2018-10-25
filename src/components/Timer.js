import React, { Component } from 'react';
import { connect } from 'react-redux';

import { timer, gameOver } from '../actions/actions';

export let intervalId;

class Timer extends Component {

  componentDidMount() {
    intervalId = setInterval(this.props.timer, 600);
  }

  componentDidUpdate() {
    if (this.props.timerWidth === 0) {
      this.props.gameOver(true);
      clearInterval(intervalId);
    } else {
      this.props.gameOver(false);
    }
  }

  render() {
    return (
      <div>
        <h4>Timer: {this.props.timerWidth}</h4>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { 
    timerWidth: state.timer
  };
};

export default connect(mapStateToProps, { timer, gameOver })(Timer);