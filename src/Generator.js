import React, { Component } from 'react';

class Generator extends Component {
  constructor(props) {
    super(props);


  }

  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  render() {
    if(this.props.animal !== '') {
      return (
        <div className="Generator">
          There are {this.randInt(2,5)} {this.props.animal}s at the zoo.
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
