import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

class NavTitle extends Component {
  render() {
    return (
      <div className="navbar-brand">
        <div className="navbar-start navbar-item is-paddingless" ref="#">
          <a className="has-text-grey-dark is-size-4 has-background-info navbar-item">Twittter</a>
        </div>
        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

class NavBarItem extends Component {
  render() {
    return (
      <a
        className="has-text-grey-dark is-size-5 has-background-info navbar-item"
        onClick={this.props.onClickHandler}
      >
        {this.props.name}
      </a>
    );
  }
}

class NavBarItems extends Component {
  render() {
    if (this.props.isUserLoggedIn) {
      return (
        <div className="navbar-item navbar-end is-paddingless">
          <NavBarItem
            name={"NewTweeet"}
            onClickHandler={() => {
            }}
          />
          <NavBarItem
            name={this.props.userName}
            onClickHandler={() => {
            }}
          />
          <NavBarItem
            name={"Log-out"}
            onClickHandler={this.props.handleLogOut}
          />
        </div>
      );
    }
    return (
      <div className="navbar-item navbar-end is-paddingless">
        <GoogleLogin
          clientId="419074857015-9epss9161rheim0dn333585b571caa9p.apps.googleusercontent.com"
          className={"button has-text-grey-dark is-size-5 navbar-item button is-info"}
          buttonText="Log-in"
          onSuccess={this.props.handleLogIn}
          onFailure={() => {
          }}
        />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-info">
          <div className="navbar-item is-paddingless">
            <NavTitle/>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu is-paddingless">
            <NavBarItems
              isUserLoggedIn={this.props.isUserLoggedIn}
              handleLogOut={this.props.handleLogOut}
              handleLogIn={this.props.handleLogIn}
              userName={this.props.userName}
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
