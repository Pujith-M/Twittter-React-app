import React, {Component} from 'react';
import Navbar from './Navbar'
import Home from './Home/home'
import {USER} from './constants'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserSignedIn: false,
      user: USER,
    }
  }

  render() {
    return (
      <div>
        <Navbar
          isUserSignedIn={this.state.isUserSignedIn}
        />
        <Home
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
