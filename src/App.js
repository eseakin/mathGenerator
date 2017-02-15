import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Generator from './Generator.js';
import Input from './Input.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {animal: '', submit: false};
  }

  setAnimal(animal) {
    this.setState({animal: animal, submit: true});
  }


  render() {
    return (
      <div className="App">
        <Input setAnimal={this.setAnimal.bind(this)} submit={this.state.submit} />
        <Generator animal={this.state.animal} />
      </div>
    );
  }
}

export default App;
