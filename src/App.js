import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import RegisterUser from './RegisterUser';
import SearchUser from './SearchUser';

import './App.css';


class App extends Component {

  render() {
    return (
      <div> 
        <Router>
          <div>
            <h3>Trade Away Application</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register User</Link></li>
              <li><Link to="/search">Search User</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/search" component={Search}/>
          </div>
        </Router>
      </div>
    );


  }
}

const Home = () => (
  <div>
    <h2>Welcome To Trade Away Application</h2>
  </div>
)

const Register = () => (
  <div>
    <RegisterUser />
  </div>
)

const Search = () => (
  <div>
    <SearchUser />
  </div>
)


export default App;