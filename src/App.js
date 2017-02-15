import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Generator from './Generator.js';
import Input from './Input.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      animal: '', 
      food: '',
      add: false,
      sub: false,
      mult: false,
      div: false
    };
  }

  submit(state) {
    this.setState(state);
    this.setState({submitted: true})
  }


  render() {
    return (
      <div className="App">
        <h1>Big Sexy Math Problem Generator</h1>
        <Input submit={this.submit.bind(this)} submitted={this.state.submitted} />
        <Generator settings={this.state} />
      </div>
    );
  }
}

export default App;
