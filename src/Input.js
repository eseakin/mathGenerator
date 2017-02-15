import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: '',
      food: '',
      add: false,
      sub: false,
      mult: false,
      div: false,
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
            Do you know <br />
            <label className="checkbox">
              <input type="checkbox" name="add" checked={this.state.add} onChange={this.handleChange.bind(this)} />
              Addition?
            </label>
            <label className="checkbox">
              <input type="checkbox" name="sub" checked={this.state.sub} onChange={this.handleChange.bind(this)} />
              Subtraction?
            </label> <br />
            <label className="checkbox">
              <input type="checkbox" name="mult" checked={this.state.mult} onChange={this.handleChange.bind(this)} />
              Multiplication?
            </label>
            <label className="checkbox">
              <input type="checkbox" name="div" checked={this.state.div} onChange={this.handleChange.bind(this)} />
              Division?
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
