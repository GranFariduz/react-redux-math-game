import React, { Component } from 'react';

class MainMenu extends Component {

  playClicked = () => {
    this.props.isPlayClicked();
  };

  render() {
    return (
      <div>
        <button onClick={this.playClicked}>Play</button>
      </div>
    );
  }

}

export default MainMenu;