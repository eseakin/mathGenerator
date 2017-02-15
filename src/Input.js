import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {animal: ''};
  }

  handleChange(event) {
    this.setState({animal: event.target.value});
  }

  handleSubmit(event) {
    this.props.setAnimal(this.state.animal);
    event.preventDefault();
  }

  render() {
    if(!this.props.submit) {
      return (
        <div className="Input">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Favorite Animal:
              <input type="text" value={this.state.animal} onChange={this.handleChange.bind(this)} />
            </label>
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
