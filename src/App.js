import React, {Component} from 'react';
import Navbar from './Application/Navbar'
import 'bulma/css/bulma.css'
import './App.css';

class App extends Component {
		constructor(props){
				super(props);
				this.state = {
						isUserSignedIn: true,
				}
		}
		render() {
				return (
						<div>
								<Navbar
										isUserSignedIn={this.state.isUserSignedIn}
								/>
						</div>

				);
		}
}

export default App;
