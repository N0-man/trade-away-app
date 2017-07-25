import React, {
  Component
} from 'react';
import {
  Table
} from 'react-bootstrap';

import './App.css';
import AppStore from './stores/AppStore';
//import * as bs from 'bootstrap';
import RegistrationActions from './actions/Registration'


class RegisterUser extends Component {
  constructor(props) {
    super(props);
      this.state = {
          data: AppStore.getRegistrationState(),
      };

    this.handleUserIdChange = this.handleUserIdChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      this.onDataChange = this.onDataChange.bind(this);

      AppStore.addChangeListener(this.onDataChange);

  }

    onDataChange(){
        this.setState({data: AppStore.getRegistrationState()});
    }

  handleUserIdChange(event) {
      RegistrationActions.useridChange(({userid: event.target.value}))
  }

  handleFirstNameChange(event) {
      RegistrationActions.fnameChange(({fname: event.target.value}))
  }
  handleLastNameChange(event) {
      RegistrationActions.lnameChange(({lname: event.target.value}))
  }
  handleTypeChange(event) {
      RegistrationActions.typeChange(({userType: event.target.value}))
  }


    handleSubmit(event) {
        RegistrationActions.registerRequest(this.state.data);
      event.preventDefault();
    }

    render() {
      const isEnabled =
          this.state.data.fname.length > 0 &&
          this.state.data.lname.length > 0 &&
          this.state.data.userid.length > 0 &&
          this.state.data.userIDAvailabilityFlag;
      return (


        <div> {

      }
      <h3>Register New User</h3>
      <div className="form-group"> {/* class is reserved in JS, so className must be used */}
        
      </div>
      <div className="form-group">
        <label htmlFor="userId">User ID</label> {/* for is reserved in JS, so htmlFor must be used */}
        <input type="text" className="form-control" id="userId" value={this.state.data.userid} onChange={this.handleUserIdChange} />
        <UserIDHelper userIdHelper={this.state.data}/>
      </div>
      <div className="form-group">
        <label htmlFor="firstName">Frist Name</label> {/* for is reserved in JS, so htmlFor must be used */}
        <input type="text" className="form-control" id="firstName" value={this.state.data.fname} onChange={this.handleFirstNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label> {/* for is reserved in JS, so htmlFor must be used */}
        <input type="text" className="form-control" id="lastName" value={this.state.data.lname} onChange={this.handleLastNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="type">User Type </label> {/* for is reserved in JS, so htmlFor must be used */}
        <select className="form-control" value={this.state.data.userType} onChange={this.handleTypeChange}>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" disabled={!isEnabled} onClick={this.handleSubmit}>Create User</button> {/* Some form attributes use an expression to set true or false: they include disabled, required, checked and readOnly */}
      </div>
      <UserList userList={this.state.data}/>

      <h3>Render Component based on User Type State </h3>
      <DecisionBuyerOrSeller decisionBuyerOrSeller = {this.state.data}/>
      </div>
      );


    }
  }


class UserIDHelper extends React.Component {
    render() {
        return this.props.userIdHelper.userIDAvailabilityFlag === true ? <Available /> : <NotAvailable />;
    }
}

class Available extends React.Component {
    render() {
        return (
            <div>
                <label>Bingo!!! This UserID is now yours...</label>
            </div>
        )
    }
}

class NotAvailable extends React.Component {
    render() {
        return (
            <div>
                <label>*** Booo, you gotta select another UserID***</label>
            </div>
        )
    }
}

  class UserList extends React.Component {
    render() {
      return (
        <Table>
        <thead>
          <tr>
            <th>User ID</th>
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
        <td>{this.props.user.userid}</td>
        <td>{this.props.user.fname}</td>
        <td>{this.props.user.lname}</td>
        <td>{this.props.user.userType}</td>
      </tr>
      )
    }
  }

  class DecisionBuyerOrSeller extends React.Component {
    render() {
      return this.props.decisionBuyerOrSeller.userType === 'Buyer' ? <Buyer /> : <Seller />;
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