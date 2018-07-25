import React, {Component} from 'react';
import Profile from './profile'
import Feed from './feed'
import UserToFollow from './usersToFollow'

class Home extends Component {

  render() {
    return (
      <section className="section">
        <div className="columns">
          <Profile
            user={this.props.user}
          />
          <Feed
            user={this.props.user}
          />
          <UserToFollow/>
        </div>
      </section>
    );
  }
}

export default Home;
