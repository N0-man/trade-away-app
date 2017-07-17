import React, {
  Component
} from 'react';
import {
  Table
} from 'react-bootstrap';

import './App.css';


class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      type: 'Buyer',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      fname: event.target.value
    });
  }
  handleLastNameChange(event) {
    this.setState({
      lname: event.target.value
    });
  }
  handleTypeChange(event) {
    this.setState({
      type: event.target.value
    });
  }

  createUser() {
    // The fetch() function returns a Promise because of it's asynchronous nature. 
    //Ir's result will be available only after the http request is completed ....
    fetch('http://localhost:8080/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fname: this.state.fname,
        lname: this.state.lname,
        type: this.state.type,
      })
    }).then(function(response) {
      return response.json();
    }).then(function(text) {
      alert('User Created: SUCCESS \n First Name: ' + text.fname + ' \n Last Name:' + text.lname + '\n Type:' + text.type);
      console.log(text);
    });
  }

  defaultStateAfterCreate() {
    this.setState({
      fname: ''
    });
    this.setState({
      lname: ''
    });
    this.setState({
      type: 'Buyer'
    });
  }

  handleSubmit(event) {
    this.createUser();
    event.preventDefault();
    this.defaultStateAfterCreate();
  }

  render() {
    const {
      fname,
      lname,
      type
    } = this.state;
    const isEnabled =
      fname.length > 0 &&
      lname.length > 0;
    return (


      <div> {

      }
      <h3>Register New User</h3>
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
        <select className="form-control" value={this.state.type} onChange={this.handleTypeChange}>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" disabled={!isEnabled} onClick={this.handleSubmit}>Create User</button> {/* Some form attributes use an expression to set true or false: they include disabled, required, checked and readOnly */}
      </div>
      <UserList userList={this.state}/>

      <h3>Render Component based on User Type State </h3>
      <DecisionBuyerOrSeller decisionBuyerOrSeller = {this.state}/>
      </div>
    );


  }
}


class UserList extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <User user={this.props.userList}/>
        </tbody>
      </Table>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.user.fname}</td>
        <td>{this.props.user.lname}</td>
        <td>{this.props.user.type}</td>
      </tr>
    )
  }
}

class DecisionBuyerOrSeller extends React.Component {
  render() {
    return this.props.decisionBuyerOrSeller.type === 'Buyer' ? <Buyer /> : <Seller />;
  }
}

class Buyer extends React.Component {
  render() {
    return (
      <div>
        <label>Welcome Buyer - Buy good stuff</label> 
      </div>
    )
  }
}

class Seller extends React.Component {
  render() {
    return (
      <div>
        <label>Hey Seller - You better sell good stuff</label> 
      </div>
    )
  }
}

export default RegisterUser;