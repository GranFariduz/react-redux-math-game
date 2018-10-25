import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../HOC/Auxil';

import Head from './Head';
import QuestionBox from './QuestionBox';
import Timer from './Timer';
import Buttons from './Buttons';
import Score from './Score';
import GameOver from './GameOver';
import MainMenu from './MainMenu';

class MainApp extends Component {

  state = { isPlayClicked: false };

  isPlayClicked = () => {
    this.setState({ isPlayClicked: true });
  };

  render() {
    return (
      <Aux>
        {
          !this.state.isPlayClicked
            ? <Aux>
                <Head />
                <MainMenu isPlayClicked={this.isPlayClicked} />
              </Aux>
            : (this.props.isGameOver
              ? <GameOver />
              : <Aux>
                  <Head />
                  <Timer />
                  <Score />
                  <QuestionBox />
                  <Buttons />
              </Aux>
              )
        }
      </Aux>
    );
  }

}

const mapStateToProps = (state) => {
  return { isGameOver: state.isGameOver };
};

export default connect(mapStateToProps)(MainApp);