import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';
import FriendRequestsContainer from './friend_requests_container';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      active: ""
    }
    this.handleFriendRequests = this.handleFriendRequests.bind(this);
    this.handleMessages = this.handleMessages.bind(this);
    this.handleNotifications = this.handleNotifications.bind(this);
    this.removeModal = this.removeModal.bind(this);
  }

  handleFriendRequests() {
    let friendList = document.getElementById("friend-request-div");
    if (this.state.active === "friendreq") {
      this.setState({ active: "" });
    } else {
      this.toggleOthers("friendreq");
    }
    friendList.classList.toggle("hidden");
    this.props.fetchAllUsers();
  }

  handleMessages() {
    let messages = document.getElementById('messages-nav');
    if (this.state.active === "messages") {
      this.setState({ active: "" });
    } else {
      this.toggleOthers("messages");
    }
    messages.classList.toggle("hidden");
  }

  handleNotifications() {
    let notification = document.getElementById('notifications-nav');
    if (this.state.active === "notifications") {
      this.setState({ active: "" });
    } else {
      this.toggleOthers("notifications");
    }
    notification.classList.toggle("hidden");
  }

  toggleOthers(dropdown) {
    switch (this.state.active) {
      case "friendreq":
        document.getElementById("friend-request-div").classList.toggle("hidden");
        break;
      case "messages":
        document.getElementById("messages-nav").classList.toggle("hidden");
        break;
      case "notifications":
        document.getElementById("notifications-nav").classList.toggle("hidden");
        break;
      default:
        break;
    }
    this.setState({ active: dropdown })
  }

  removeModal() {
    this.toggleOthers(this.state.active);
    this.setState({ active: "" })
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
          <div className="nav-cont">
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
                      <div id="remove-friend-box" onClick={this.removeModal}></div>
                      <FriendRequestsContainer />
                    </div>
                  <i onClick={this.handleMessages} className="fab fa-facebook-messenger"></i>
                    <div id="messages-nav" className="hidden">
                      <div id="remove-friend-box" onClick={this.removeModal}></div>
                      <section>Messages</section>
                      No messages to show.
                    </div>
                  <i onClick={this.handleNotifications} className="fas fa-bell"></i>
                    <div id="notifications-nav" className="hidden">
                      <div id="remove-friend-box" onClick={this.removeModal}></div>
                      <section>Notifications</section>
                      No notifications to show.
                    </div>
                </div>
                <button onClick={logout}>Log Out</button>
              </div>
            </div>

          </div>
        </div>
      )
    }
    return null;
  }
}

