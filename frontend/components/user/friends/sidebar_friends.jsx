import React from 'react';
import { Link } from 'react-router-dom';

const SidebarFriends = ({ user }) => {
  if (!user) {
    return null;
  }
  return(
    <div className="sidebar-friend">
      <Link to={`/users/${user.id}`}>
        <img src={user.profilePicUrl} />
        <div id="sidebar-friend-name">{user.firstName} {user.lastName}</div>
      </Link>
    </div>
  )
}

export default SidebarFriends;