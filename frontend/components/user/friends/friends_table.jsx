import React from 'react';
import { Link } from 'react-router-dom';
import FriendButton from '../../button/friend_button';

const FriendsTable = ({ currentUser, user }) => {
  if (!user) {
    return null;
  }
  return (
    <div className="userpage-friend">
      <Link to={`/users/${user.id}`}>
        <img src={user.profilePicUrl} />
      </Link>
      <Link to={`/users/${user.id}`}>
        <div id="userpage-friend-name">{user.firstName} {user.lastName}</div>
      </Link>
      <div className="userpage-friend-button">
        <FriendButton currentUser={currentUser} num={user.id} user={user} />
      </div>
    </div>
  )
}

export default FriendsTable;