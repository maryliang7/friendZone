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

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id)
  }

  handleFriendRequests() {
    let friendList = document.getElementById("friend-request-div");
    friendList.classList.toggle("hidden");
    this.props.fetchAllUsers();
    // let requestIds = this.props.requests
  }

  removeModal() {
    let friendList = document.getElementById("friend-request-div");
    friendList.classList.toggle("hidden");
  }

  render() {
    const { currentUser, logout } = this.props
    const display = currentUser ? (
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
    ) : (
      <p></p>
      )
    return (
      <div>{display}</div>
    ) 
  }
}

