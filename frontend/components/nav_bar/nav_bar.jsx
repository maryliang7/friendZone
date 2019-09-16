import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-bar-bg">
      <div id="nav-bar">
        <div id="left-nav">
          <Link to="/"><button><h3 id="logo">f</h3></button></Link>
          <input type="text" placeholder="Search"/>
        </div>
        <div id="right-nav">
          <span>
            <img src={currentUser.profilePicUrl} />
          </span>
          <p><Link to={`/users/${currentUser.id}`}>{currentUser.firstName} {currentUser.lastName}</Link></p>
          <div className="nav-icons">
            <i className="fas fa-user-friends"></i>
            <i className="fab fa-facebook-messenger"></i>
            <i className="fas fa-bell"></i>
          </div>
          <button onClick={logout}>Log Out</button>
        </div>
      </div>
    </div>
  ) : (
    <p></p>
    )
  return (
    <div>{display}</div>
  ) 
}

export default NavBar;