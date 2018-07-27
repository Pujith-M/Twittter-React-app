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
    if (this.props.isUserSignedIn) {
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
          buttonText="Login"
          onSuccess={this.props.handleSignIn}
          onFailure={() => {
          }}
        />
      </div>
    );
  }
}

const navBarBurger = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(element => {
        element.addEventListener('click', () => {
          const target = element.dataset.target;
          const $target = document.getElementById(target);
          element.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
};

class Navbar extends Component {
  render() {
    navBarBurger();
    return (
      <div>
        <nav className="navbar is-info">
          <div className="navbar-item is-paddingless">
            <NavTitle/>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu is-paddingless">
            <NavBarItems
              isUserSignedIn={this.props.isUserSignedIn}
              handleLogOut={this.props.handleLogOut}
              handleSignIn={this.props.handleSignIn}
              userName={this.props.userName}
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
