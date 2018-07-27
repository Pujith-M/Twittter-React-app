import React, {Component} from 'react';
import Navbar from './components/Home/navbar'
import Home from './components/Home/home'
import {USER} from "./constants";

class App extends Component {

  handleLogOut = () => {
    this.setState({
      isUserLoggedIn: false,
    });
  };

  handleLogIn = (googleUserInfo) => {
    const user = {
      name: googleUserInfo.profileObj.name,
      image: googleUserInfo.profileObj.imageUrl,
      userName: '#' + googleUserInfo.profileObj.name,
      tweeets: [],
    };
    this.setState({
      isUserLoggedIn: true,
      user: user
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      user: USER,
    };
  }

  render() {
    return (
      <div>
        <Navbar
          isUserLoggedIn={this.state.isUserLoggedIn}
          handleLogOut={this.handleLogOut}
          handleLogIn={this.handleLogIn}
          userName={this.state.user.name}
        />
        <HomePage
          isUserLoggedIn={this.state.isUserLoggedIn}
          user={this.state.user}
        />
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    if (this.props.isUserLoggedIn) {
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
