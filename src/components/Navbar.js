import React, {Component} from 'react';

const navTitle = () => {
  return (
    <div className="navbar-brand">
      <div className="navbar-start">
        <div className="navbar-item is-paddingless" ref="#">
          <a className="has-text-grey-dark is-size-4 has-background-info navbar-item"   >Twittter</a>
        </div>
      </div>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

const navItemsIfUserSignedIn = (props) => {
  return (
    <div id="navbarExampleTransparentExample" className="navbar-menu is-paddingless">
      <a className="has-text-grey-dark is-size-5 has-background-info navbar-item">NewTweeet</a>
      <a className="has-text-grey-dark is-size-5 has-background-info navbar-item">{props.userName}</a>
      <a className="has-text-grey-dark is-size-5 has-background-info navbar-item" onClick={props.handleLogOut}>Log-out</a>
    </div>
  );
};

const navItemsIfUserSignedOut = (props) => {
  return (
    <div id="navbarExampleTransparentExample" className="navbar-menu is-paddingless">
      <a className="has-text-grey-dark is-size-5 has-background-info navbar-item" onClick={props.handleSignIn}>Sign-in</a>
      <a className="has-text-grey-dark is-size-5 has-background-info navbar-item" onClick={props.handleSignIn}>Sign-up</a>
    </div>
  );
};

const NavBarItems = (props) => {
  const navItems = props.isUserSignedIn ? navItemsIfUserSignedIn : navItemsIfUserSignedOut;
  return (
    <div className="navbar-end">
      <div className="navbar-item is-paddingless">
        {navItems(props)}
      </div>
    </div>
  )

};

const nabBarBurger = ()=>{
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
    return (
      <div>
        {nabBarBurger()}
        <nav className="navbar is-info">
          <div className="navbar-item is-paddingless">
            {navTitle()}
          </div>
          {NavBarItems(this.props)}
        </nav>
      </div>
    );
  }
}


export default Navbar;
