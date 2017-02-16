import React, { Component } from 'react';

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numAnimals: this.randInt(2, 4),
      numFood: this.randInt(1, 3),
      animal: null,
      many: 'many',
      answerInput: ''
    };

  }

  handleChange(event) {
    this.setState({answerInput: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.answer == this.state.answerInput);
  }

  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.settings);
    
    if(newProps.settings.food) {
      const food = newProps.settings.food;
      if(food[food.length - 1] !== 's') {
        this.setState({many: 'much'});
      }
    }

    if(newProps.settings.difficulty) {
      const numAnimals = this.state.numAnimals;
      const numFood = this.state.numFood;
      const difficulty = newProps.settings.difficulty;

      this.setState({
        numAnimals: numAnimals * difficulty,
        numFood: numFood * difficulty,
        answer: numFood * difficulty * numAnimals * difficulty
      });

    }
  }

  render() {
    if(this.state.animal !== null) {
      return (
        <div className="Generator container">
          Difficulty: {this.props.settings.difficulty} {this.state.answer} {this.state.answerInput}<br /><br />
          There are {this.state.numAnimals} {this.state.animal}s at the zoo. They need to eat {this.state.numFood} {this.state.food} per day to survive. <br />
          How {this.state.many} total {this.state.food} do the {this.state.animal}s eat in a day?

          <form onSubmit={this.handleSubmit.bind(this)}>
            <label className="inputField">
              <input type="text" value={this.state.answerInput} onChange={this.handleChange.bind(this)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
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
