import React from 'react';

const renderUserProfile = (user) => {
  return (
    <div className="panel-block">
      <div className="media-left">
        <img style={{borderRadius: '50%'}} className="image is-64x64" src={user.image} alt=""/>
      </div>
      <div className="media-content">
        <p className={"is-size-4"}><strong>{user.name}</strong></p>
        <p>{user.username}</p>
      </div>
    </div>
  );
};

const renderUserInfo = (user) => {
  return (
    <div className="panel-block level">
      <div className="level-item has-centered-text">
        <div>
          <p className="heading is-size-7">Tweeets</p>
          <p className="title is-6">{user.tweeets.length}</p>
        </div>
      </div>
      <div className="level-item has-centered-text">
        <div>
          <p className="heading is-size-7">Following</p>
          <p className="title is-6">7</p>
        </div>
      </div>
      <div className="level-item has-centered-text">
        <div>
          <p className="heading is-size-7">Followers</p>
          <p className="title is-6">7</p>
        </div>
      </div>
    </div>
  );
};

const Profile = (props) => {
  return (
    <div className="column is-one-quarter">
      <p className="panel-heading">Profile</p>
      {renderUserProfile(props.user)}
      {renderUserInfo(props.user)}
    </div>
  );
};

export default Profile;
