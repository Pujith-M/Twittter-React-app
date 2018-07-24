import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import props from "../App";

const navTitle = () => {
		return (
				<div className="navbar-brand">
						<div className="navbar-start">
								<div className="navbar-item" ref="#">
										<p className=" is-size-3 has-text-grey-dark">{"Twittter"}</p>
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

const navItemsIfUserSignedIn = () => {
		return (
				<div id="navbarExampleTransparentExample" className="navbar-menu">
						<a className="control has-text-grey-dark" href={"#"}>
								<pre className={"is-size-5 has-text-grey-dark has-background-info"}>NewTweeet</pre>
						</a>
						<a className="control has-text-grey-dark" href={"#"}>
								<pre className={"is-size-5 has-text-grey-dark has-background-info"}>Profile</pre>
						</a>
						<a className="control has-text-grey-dark" href={"#"}>
								<pre className={"is-size-5 has-text-grey-dark has-background-info"}>Log-out</pre>
						</a>
				</div>
		);
};

const navItemsIfUserSignedOut = () => {
		return (
				<div id="navbarExampleTransparentExample" className="navbar-menu">
						<a className="control has-text-grey-dark" href={"#"}>
								<pre className={"is-size-5 has-text-grey-dark has-background-info"}>Sign-in</pre>
						</a>
						<a className="control has-text-grey-dark" href={"#"}>
								<pre className={"is-size-5 has-text-grey-dark has-background-info"}>Sign-up</pre>
						</a>
				</div>
		);
};

const NavBarItems = (props) => {
		const navItems = props.isUserSignedIn ? navItemsIfUserSignedIn : navItemsIfUserSignedOut;
		return (
				<div className="navbar-end">
						<div className="navbar-item ">
								{navItems()}
						</div>
				</div>
		)

};

class Navbar extends Component {

		render() {

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

				return <nav className="navbar is-info is-fixed-top">
						<div className="navbar-item">
								{navTitle()}
						</div>
						{NavBarItems(this.props)}
				</nav>;
		}
}

export default Navbar;
