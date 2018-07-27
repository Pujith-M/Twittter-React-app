import React, {Component} from 'react';
import Navbar from './components/navbar'
import Home from './components/Home/home'
import {USER} from "./constants";

class App extends Component {

  handleLogOut = () => {
    this.setState({
      isUserSignedIn: false,
    });
  };

  handleSignIn = (googleUserInfo) => {
    const user = {
      name: googleUserInfo.profileObj.name,
      image: googleUserInfo.profileObj.imageUrl,
      userName: '#' + googleUserInfo.profileObj.name,
      tweeets: [],
    };
    this.setState({
      isUserSignedIn: true,
      user: user
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      isUserSignedIn: false,
      user: USER,
    };
  }

  render() {
    return (
      <div>
        <Navbar
          isUserSignedIn={this.state.isUserSignedIn}
          handleLogOut={this.handleLogOut}
          handleSignIn={this.handleSignIn}
          userName={this.state.user.name}
        />
        <HomePage
          isUserSignedIn={this.state.isUserSignedIn}
          user={this.state.user}
        />
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    if (this.props.isUserSignedIn) {
      return (
        <Home
          user={this.props.user}
        />
      );
    }
    return (
      <h1
        className="title is-1 has-text-centered"
        style={{marginTop: '30%'}}
      >
        Welcome to Twittter
      </h1>
    );
  }
}

export default App;
