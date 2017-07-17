import React, {
  Component
} from 'react';
import {
  Table
} from 'react-bootstrap';

import './App.css';


class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lname: '',
      user: [],
    };

    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLastNameChange(event) {
    this.setState({
      lname: event.target.value
    });
  }

  searchUser() {
    // The fetch() function returns a Promise because of it's asynchronous nature. 
    //Ir's result will be available only after the http request is completed ....
    fetch('http://localhost:8080//findUser/' + this.state.lname, {
        method: 'GET',
      }).then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          user: json
        });
      });
  }

  handleSubmit(event) {
    this.searchUser();
    event.preventDefault();
  }

  render() {
    const isEnabled =
      this.state.lname.length > 0;

    return (
      <div> 
      <h3>Find User By Last Name</h3>
      
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label> {/* for is reserved in JS, so htmlFor must be used */}
        <input type="text" className="form-control" id="lastName" value={this.state.lname} onChange={this.handleLastNameChange} />
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" disabled={!isEnabled} onClick={this.handleSubmit}>Search</button> {/* Some form attributes use an expression to set true or false: they include disabled, required, checked and readOnly */}
      </div>
      
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {this.state.user.map(function(user, key) {
             
               return (
                  <tr key = {key}>
                      <td>{user.fname}</td>
                      <td>{user.lname}</td>
                      <td>{user.type}</td>
                  </tr>
                )
             
             })}
        </tbody>
      </Table>


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

export default SearchUser;