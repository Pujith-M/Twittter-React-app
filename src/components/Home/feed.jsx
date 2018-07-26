import React from 'react';
import NewTweetForm from "./newTweetForm";

const renderTweeet = (currentTweet) => {
  return (
      <div className="box">
        <div className="panel-block has-background-grey-lighter">
          <div className="media-left">
            <img style={{borderRadius: '50%'}} className="image is-32x32" src={currentTweet.user.image} alt=""/>
          </div>
          <div className="media-content">
            <b>{currentTweet.user.name}</b><br/>
            <small>{currentTweet.user.username}</small>
          </div>
        </div>
        <article className="media">
          <div className="content" style={{width: '100%'}}>
            <blockquote>{currentTweet.tweet}</blockquote>
          </div>
        </article>
      </div>
  );
};

const Feed = (props) => {
  return (
    <div className="column is-half">
      <NewTweetForm
        user={props.user}
        newTweeetHandler={props.newTweeetHandler}

      />
      {props.tweeets.reverse().map((currentTweet, index) => <div key={index}>{renderTweeet(currentTweet)}</div>)}

    </div>
  );
};

export default Feed;
