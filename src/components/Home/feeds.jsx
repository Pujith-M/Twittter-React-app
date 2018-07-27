import React, {Component} from 'react';
import NewTweetForm from "./newTweetForm";

class Tweeet extends Component {
  render() {
    return (
      <div className="box">
        <div className="panel-block has-background-grey-lighter">
          <div className="media-left">
            <img
              style={{borderRadius: '50%'}}
              className="image is-32x32"
              src={this.props.tweeet.user.image} alt=""
            />
          </div>
          <div className="media-content">
            <b>{this.props.tweeet.user.name}</b><br/>
            <small>{this.props.tweeet.user.username}</small>
          </div>
        </div>
        <article className="media">
          <div className="content" style={{width: '100%'}}>
            <blockquote>{this.props.tweeet.tweet}</blockquote>
          </div>
        </article>
      </div>
    );
  }
}

class RenderTweets extends Component {
  render() {
    const tweets = this.props.tweeets.map((tweeet, index) => (
      <Tweeet
        key={index}
        tweeet={tweeet}
      />)
    );
    return (tweets);
  }
}

class Feeds extends Component {
  render() {
    return (
      <div className="column is-half">
        <NewTweetForm
          user={this.props.user}
          newTweeetHandler={this.props.newTweeetHandler}
        />
        <RenderTweets
          tweeets={this.props.tweeets.reverse()}
        />
      </div>
    );
  }
}

export default Feeds;
