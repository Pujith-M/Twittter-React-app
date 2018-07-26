import React, {Component} from 'react';
import Profile from './profile.jsx'
import Feed from './feed.jsx'
import UserToFollow from './usersToFollow.jsx'
import {TWEEETS, USERS} from "../../constants";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:USERS,
      tweeets:TWEEETS,
    }
  }

  newTweeetHandler = (tweet) => {
    let tweeets = this.state.tweeets.slice();
    const newTweet = {
      tweet: tweet,
      user: this.props.user,
    };
    tweeets.push(newTweet);
    console.log(tweeets);
    this.setState({tweeets: tweeets});
  };

  render() {
    return (
      <section className="section">
        <div className="columns">
          <Profile
            user={this.props.user}
          />
          <Feed
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
