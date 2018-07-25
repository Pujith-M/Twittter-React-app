import React from 'react';
import {USERS} from "../../constants";


const renderUser = (user) => {
  return (
    <nav className="level">
      <p className="level-item has-text-centered">
        <a className="link is-info">
          <img style={{borderRadius: '50%'}} className="image is-32x32" src={user.image} alt=""/>
        </a>
      </p>
      <p className="level-item ">
        <strong>{user.name}</strong>
      </p>
      <p className="level-item ">
        <a className="button is-info">Follow</a>
      </p>
    </nav>
  );
};

const renderUsers = USERS.map((user) =>
  <div className="panel-heading">{renderUser(user)}</div>
);
const userToFollow = () => {
  return (
    <div className="column is-hidden-mobile">
      <div className="panel-heading has-background-grey-lighter">
        <b className="is-4">Suggestions for you</b>
      </div>
      {renderUsers}
    </div>
  );
};

export default userToFollow;
