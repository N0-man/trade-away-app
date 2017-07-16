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
      <div className="form-group"> {/* class is reserved in JS, so className must be used */}
          
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Frist Name</label> {/* for is reserved in JS, so htmlFor must be used */}
          <input type="text" className="form-control" id="firstName" value={this.state.fname} onChange={this.handleFirstNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label> {/* for is reserved in JS, so htmlFor must be used */}
          <input type="text" className="form-control" id="lastName" value={this.state.lname} onChange={this.handleLastNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="type">User Type </label> {/* for is reserved in JS, so htmlFor must be used */}
          <select className="form-control-select" value={this.state.type} onChange={this.handleTypeChange}>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
          </select>
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Create User</button> {/* Some form attributes use an expression to set true or false: they include disabled, required, checked and readOnly */}
        </div>
      </div>


    );
  }
}

export default App;
