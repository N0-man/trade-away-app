import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: ''};
    this.state = {lname: ''};
    this.state = {type: 'Buyer'};

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({fname: event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({lname: event.target.value});
  }
  handleTypeChange(event) {
    this.setState({type: event.target.value});
  }

  handleSubmit(event) {
    alert('First Name: ' + this.state.fname + ' \n Last Name :' + this.state.lname + ' \n Type:' + this.state.type);
    event.preventDefault();
  }

  render() {
    return (
      <div> {

      }
        <h1>Trade Away Application</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.fname} onChange={this.handleFirstNameChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.lname} onChange={this.handleLastNameChange} />
          </label>
          <label>
            User Type:
            <select value={this.state.type} onChange={this.handleTypeChange}>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>


    );
  }
}

export default App;
