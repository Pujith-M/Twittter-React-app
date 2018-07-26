import React, {Component} from 'react';
import Navbar from './Navbar'
import Home from './components/Home/home'
import {USER} from './constants'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUserSignedIn: true,
      user: USER,
    };
  }

  handleLogOut = () => {
    this.setState({
      isUserSignedIn: false,
    });
  };
  handleSignIn = () => {
    this.setState({
      isUserSignedIn: true,
    });
  };
  render() {
    return (
      <div>
        <Navbar
          isUserSignedIn={this.state.isUserSignedIn}
          handleLogOut={this.handleLogOut}
          handleSignIn={this.handleSignIn}
        />
        <Home
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
