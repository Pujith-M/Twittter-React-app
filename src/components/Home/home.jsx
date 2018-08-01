import React, {Component} from 'react';
import Profile from './profile.jsx'
import Feeds from './feeds.jsx'
import UserToFollow from './usersToFollow.jsx'
import {TWEEETS, USERS} from "../../constants";

class Home extends Component {

  newTweeetHandler = (tweet) => {
    let tweeets = this.state.tweeets.slice();
    const newTweet = {
      tweet: tweet,
      user: this.props.user,
    };
    tweeets.push(newTweet);
    this.setState({tweeets: tweeets});
  };

  constructor(props) {
    super(props);
    let users = USERS.slice();
    const newUser = this.props.user;
    users.push(newUser);
    this.state = {
      users: users,
      tweeets: TWEEETS,
    };
  }

  render() {
    return (
      <section className="section">
        <div className="columns">
          <Profile
            user={this.props.user}
          />
          <Feeds
            user={this.props.user}
            tweeets={this.state.tweeets}
            newTweeetHandler={this.newTweeetHandler}
          />
          <UserToFollow
            users={this.state.users}
          />
        </div>
      </section>
    );
  }
}

export default Home;
