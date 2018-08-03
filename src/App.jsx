import React, {Component} from 'react';
import Navbar from './components/Home/navbar'
import Home from './components/Home/home'

class App extends Component {

  handleLogOut = () => {
    localStorage.removeItem('user');
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
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({
      isUserLoggedIn: true,
      user: user
    });
  };

  constructor(props) {
    super(props);
    let isUserLoggedIn = false;
    let user = localStorage.user;
    console.log(user);
    if (user) {
      isUserLoggedIn = true;
      user = JSON.parse(user);
    }
    this.state = {
      isUserLoggedIn: isUserLoggedIn,
      user: user,
    };
  }

  render() {
    return (
      <div>
        <Navbar
          isUserLoggedIn={this.state.isUserLoggedIn}
          handleLogOut={this.handleLogOut}
          handleLogIn={this.handleLogIn}
          user={this.state.user}
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
