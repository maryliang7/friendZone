import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello {currentUser.username} </p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <p></p>
    )
  return (
    <div>{display}</div>
  ) 
}

export default NavBar;