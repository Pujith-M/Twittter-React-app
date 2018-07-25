import React from 'react';
import {TWEEETS} from "../constants";

const renderTweeets = TWEEETS.map((currentTweet) =>
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


const tweetForm = (user) => {
  return (
    <article className="media box">
      <figure className="media-left">
        <img style={{borderRadius: '50%'}} src={user.image} alt="" className="image is-64x64"/>
      </figure>
      <div className="media-content">
        <textarea className="textarea is-info" placeholder="Tweeet about it!"/>
        <a style={{marginTop: '10px'}} className="button is-info">Tweeet</a>
      </div>
    </article>
  );
};

const Feed = (props) => {
  return (
    <div className="column is-half">
      {tweetForm(props.user)}
      {renderTweeets}

    </div>
  );
};

export default Feed;
