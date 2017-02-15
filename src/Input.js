import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: '',
      food: '',
      difficulty: '1',
      submitted: this.props.submitted
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.submit(this.state);
    this.setState({submitted: true});
    event.preventDefault();
  }

  render() {
    if(!this.state.submitted) {
      return (
        <div className="Input">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              How much have you learned?
              <select name="difficulty" value={this.state.difficulty} onChange={this.handleChange.bind(this)}>
                <option value="1">Addition</option>
                <option value="2">Subtraction</option>
                <option value="3">Multiplication</option>
                <option value="4">Division</option>
                <option value="5">Decimals</option>
                <option value="6">Percents</option>
              </select>
            </label> <br /><br />

            <label className="inputField">
              What is your favorite animal?
              <input type="text"  name="animal" value={this.state.animal} onChange={this.handleChange.bind(this)} />
            </label> <br />

            <label className="inputField">
              What does that animal eat?
              <input type="text"  name="food" value={this.state.food} onChange={this.handleChange.bind(this)} />
            </label> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    } else {
      return <div className="Input" />
    }
  }
}

export default Input;
