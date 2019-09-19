import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';
import FriendRequestsContainer from './friend_requests_container';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.handleFriendRequests = this.handleFriendRequests.bind(this);
  }

  handleFriendRequests() {
    let friendList = document.getElementById("friend-request-div");
    friendList.classList.toggle("hidden");
    this.props.fetchAllUsers();
  }

  removeModal() {
    let friendList = document.getElementById("friend-request-div");
    friendList.classList.toggle("hidden");
  }

  render() {
    const { currentUser, logout } = this.props
    let friendNotification;
    if (currentUser && currentUser.receivedRequests && Object.keys(currentUser.receivedRequests).length) {
      friendNotification = <div id="fr-notification"></div>
    }
    if (currentUser) {
      return (
        <div className="nav-bar-bg">
          <div id="nav-bar">
            <div id="left-nav">
              <Link to="/"><button><h3 id="logo">f</h3></button></Link>
              <div className="search-nav">
                <SearchContainer />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="right-nav">
              <span>
                <img src={currentUser.profilePicUrl} />
              </span>
              <p><Link to={`/users/${currentUser.id}`}>{currentUser.firstName} {currentUser.lastName}</Link></p>
              <div className="nav-icons">
                {friendNotification}
                <i onClick={this.handleFriendRequests} className="fas fa-user-friends"></i>
                <div id="friend-request-div" className="hidden">
                  <div id="remove-friend-box" onClick={this.removeModal}>
                  </div>
                  <FriendRequestsContainer />
                </div>
                <i className="fab fa-facebook-messenger"></i>
                <i className="fas fa-bell"></i>
              </div>
              <button onClick={logout}>Log Out</button>
            </div>
          </div>
        </div>
      )
    }
    return null;
  }
}

