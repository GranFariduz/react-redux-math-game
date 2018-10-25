import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {

  render() {
    return (
      <div>
        <h3>Score: { this.props.score }</h3>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    score: state.score
  };
}

export default connect(mapStateToProps)(Score);