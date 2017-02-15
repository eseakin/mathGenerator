import React, { Component } from 'react';

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numAnimals: this.randInt(2, 5),
      numFood: this.randInt(2, 5),
    };

  }

  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  render() {
    if(this.props.settings.animal !== '') {
      return (
        <div className="Generator">
          Difficulty: {this.props.settings.difficulty} <br />
          There are {this.state.numAnimals} {this.props.settings.animal}s at the zoo. They need to eat {this.state.numFood} {this.props.settings.food} per day to survive.
        </div>
      );
      
    } else {
      return (
        <div className="Generator" />
      );
    }
  }
}

export default Generator;
