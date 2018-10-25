import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateRandom } from '../actions/actions';

import generateRandomNumber from '../helper/generate';

class QuestionBox extends Component {

  componentDidMount() {
    let random = generateRandomNumber();
    this.props.generateRandom(
      random.num1, 
      random.num2, 
      random.result
    );
  }

  render() {
    return (
      <div>
        <p> {this.props.randomizer.num1} + {this.props.randomizer.num2} = {this.props.randomizer.result} </p>
      </div>
    );
  };

}

const mapStateToProps = (state) => {
  return { randomizer: state.randomizer };
};

export default connect(mapStateToProps, { generateRandom })(QuestionBox);