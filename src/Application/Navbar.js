import React, {Component} from 'react';
import 'bulma/css/bulma.css'

class Navbar extends Component {
		render() {

				document.addEventListener('DOMContentLoaded', () => {

						// Get all "navbar-burger" elements
						const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

						// Check if there are any navbar burgers
						if ($navbarBurgers.length > 0) {

								// Add a click event on each of them
								$navbarBurgers.forEach( el => {
										el.addEventListener('click', () => {

												// Get the target from the "data-target" attribute
												const target = el.dataset.target;
												const $target = document.getElementById(target);
												// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
												el.classList.toggle('is-active');
												$target.classList.toggle('is-active');

										});
								});
						}

				});

				return (
						<nav className="navbar is-info is-fixed-top">
								<div className="navbar-item">
										<div className="navbar-brand">
												<div className="navbar-start">
														<div className="navbar-item" href="#">
																<p className=" is-size-3 has-text-grey-dark">Twittter</p>
														</div>
												</div>
												<div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
														<span></span>
														<span></span>
														<span></span>
												</div>
										</div>
								</div>

								<div id="navbarExampleTransparentExample" className="navbar-menu">
										<div className="navbar-end">
												<div className="navbar-item ">
														<a className="control has-text-grey-dark" href={"#"}>
																<pre className={"is-size-5 has-text-grey-dark has-background-info"}>NewTweeet</pre>
														</a>
														<a className="control has-text-grey-dark" href={"#"}>
																<pre className={"is-size-5 has-text-grey-dark has-background-info"}>Profile</pre>
														</a>
														<a className="control has-text-grey-dark" href={"#"}>
																<pre className={"is-size-5 has-text-grey-dark has-background-info"}>Sign-in</pre>
														</a>
														<a className="control has-text-grey-dark" href={"#"}>
																<pre className={"is-size-5 has-text-grey-dark has-background-info"}>Sign-up</pre>
														</a>
												</div>
										</div>
								</div>
						</nav>
				);
		}
}

export default Navbar;
