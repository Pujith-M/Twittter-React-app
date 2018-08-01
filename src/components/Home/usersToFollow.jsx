import React, {Component} from 'react';

class User extends Component {
  render() {
    return (
      <nav className="level">
        <p className="level-item has-text-centered">
          <a className="link is-info">
            <img style={{borderRadius: '50%'}} className="image is-32x32" src={this.props.user.image} alt=""/>
          </a>
        </p>
        <p className="level-item is-hidden-tablet-only">
          <strong>{this.props.user.name}</strong>
        </p>
        <p className="level-item ">
          {/*<a className="button is-info">Follow</a>*/}
        </p>
      </nav>
    );
  }
}

class RenderUserInfo extends Component {
  render() {
    const usersInfo = this.props.users.map((user, index) => (
      <User
        key={index}
        user={user}
      />
    ));
    return (usersInfo);
  }
}

class UserToFollow extends Component {
  render() {
    return (
      <div className="column is-hidden-mobile">
        <div className="panel-heading has-background-grey-lighter">
          <b className="is-4">Suggestions for you</b>
        </div>
        <RenderUserInfo
          users={this.props.users}
        />
      </div>
    );
  }
}

export default UserToFollow;
