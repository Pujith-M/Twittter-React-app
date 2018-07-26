import React, {Component} from 'react';
import Navbar from './components/Navbar'
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

  renderHome = () =>{
    if (this.state.isUserSignedIn) {
      return(<Home
          user={this.state.user}
        />
        );
    }
  };

  render() {
    return (
      <div>
        <Navbar
          isUserSignedIn={this.state.isUserSignedIn}
          handleLogOut={this.handleLogOut}
          handleSignIn={this.handleSignIn}
          userName={this.state.user.name}
        />
        {this.renderHome()}
      </div>
    );
  }
}

export default App;
