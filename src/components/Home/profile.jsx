import React, {Component} from 'react';

class RenderUserProfile extends Component {
  render() {
    return (
      <div className="panel-block">
        <div className="media-left">
          <img style={{borderRadius: '50%'}} className="image is-64x64" src={this.props.user.image} alt=""/>
        </div>
        <div className="media-content">
          <p className={"is-size-4"}><strong>{this.props.user.name}</strong></p>
          <p>{this.props.user.username}</p>
        </div>
      </div>
    );
  }
}

class RenderUserInfo extends Component {
  render() {
    return (
      <div className="panel-block level">
        <div className="level-item has-centered-text">
          <div>
            <div className="heading is-size-7">Tweeets</div>
            <div className="title is-6">{this.props.user.tweeets.length}</div>
          </div>
        </div>
        <div className="level-item has-centered-text">
          <div>
            <div className="heading is-size-7">Following</div>
            <div className="title is-6">7</div>
          </div>
        </div>
        <div className="level-item has-centered-text">
          <div>
            <div className="heading is-size-7">Followers</div>
            <div className="title is-6">7</div>
          </div>
        </div>
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <div className="column is-one-quarter">
        <p className="panel-heading">Profile</p>
        <RenderUserProfile
          user={this.props.user}
        />
        <RenderUserInfo
          user={this.props.user}
        />
      </div>
    );
  }
}

export default Profile;
