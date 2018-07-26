import React, {Component} from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home/home'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUserSignedIn: false,
      user: "",
    };
  }

  handleLogOut = () => {
    this.setState({
      isUserSignedIn: false,
    });
  };

  handleSignIn = (googleUserInfo) => {
    const user = {
      name: googleUserInfo.profileObj.name,
      image: googleUserInfo.profileObj.imageUrl,
      userName:'#' + googleUserInfo.profileObj.name,
      tweeets: [],
    };
    this.setState({
      isUserSignedIn: true,
      user:user
    });
  };

  renderHome = () =>{
    if (this.state.isUserSignedIn) {
      return(<Home
          user={this.state.user}
        />
        );
    }
    return(<h1 className="title is-1 has-text-centered" style={{ marginTop:'30%'} }>Welcome to Twittter</h1>)
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
