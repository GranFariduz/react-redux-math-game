import React, { Component } from 'react';
import { connect } from 'react-redux';

import generateRandomNumber from '../helper/generate';
import { intervalId } from './Timer';

import { generateRandom, gameOver, timer, scoreUpdate } from '../actions/actions';

class Buttons extends Component {

  correctorFunc = (trueOrNot) => {
    if (trueOrNot) {
      let random = generateRandomNumber();
      this.props.generateRandom(random.num1, random.num2, random.result);
      this.props.gameOver(false);
      this.props.scoreUpdate();
      this.props.timer(100);
    } else {
      this.props.gameOver(true);
      clearInterval(intervalId);
    }
  };

  correctButtonClicked = () => {
    this.props.isCorrect ? this.correctorFunc(true) : this.correctorFunc();
  };

  wrongButtonClicked = () => {
    !this.props.isCorrect ? this.correctorFunc(true) : this.correctorFunc();
  };

  render() {
    return (
      <div>
        <button onClick={this.correctButtonClicked}>Correct</button>
        <button onClick={this.wrongButtonClicked}>Wrong</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    isCorrect: state.randomizer.isCorrect
  };
};

export default connect(mapStateToProps, { scoreUpdate, timer, generateRandom, gameOver })(Buttons);