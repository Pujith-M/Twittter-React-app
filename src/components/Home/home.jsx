import React, {Component} from 'react';
import Profile from './profile.jsx'
import Feeds from './feeds.jsx'
import {USERS} from "../../constants";

class Home extends Component {


  postTweet = (tweet) => {
    fetch('/api/tweet', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tweet: tweet})
    })
  };

  newTweeetHandler = (tweet) => {

    let tweeets = this.state.tweeets.slice();
    const newTweet = {
      tweet: tweet,
      user: this.props.user,
    };
    tweeets.push(newTweet);
    this.setState({tweeets: tweeets});
    this.postTweet(newTweet);
  };

  callApi = async () => {
    const response = await fetch('/api/tweets');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  constructor(props) {
    super(props);
    let users = USERS.slice();
    const newUser = this.props.user;
    users.push(newUser);
    this.state = {
      users: users,
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({tweeets: res.tweets}))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.tweeets) {
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
            {/*<UserToFollow*/}
            {/*users={this.state.users}*/}
            {/*/>*/}
          </div>
        </section>
      );
    }
    return (<div>Server not connected</div>);

  }
}

export default Home;
