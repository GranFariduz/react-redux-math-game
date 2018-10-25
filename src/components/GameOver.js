import React, { Component } from 'react';
import { connect } from 'react-redux';

import { gameOver, timer, scoreUpdate } from '../actions/actions';

class GameOver extends Component {

  gameOverHandler = () => {
    this.props.gameOver(false);
    this.props.scoreUpdate(0);
    this.props.timer(100);
  };

  render() {
    return (
      <div>
        <p>This is Game Over!</p>
        <p>Score: {this.props.score}</p>
        <button onClick={this.gameOverHandler}>Restart Game?</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({ score: state.score });

export default connect(mapStateToProps, { scoreUpdate, gameOver, timer })(GameOver);