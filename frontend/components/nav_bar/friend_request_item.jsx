import React from 'react';
import { Link } from 'react-router-dom';


export default class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)
    this.addFriendship = this.addFriendship.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
  }


  deleteRequest() {
    this.props.deleteFriendRequest(this.props.requestId);
    this.props.fetchCurrentUser(this.props.currentUser.id);
  }

  addFriendship() {
    this.props.deleteFriendRequest(this.props.requestId);
    this.props.addFriendship({ friend_one: this.props.user.id, friend_two: this.props.currentUser.id });
    this.props.fetchCurrentUser(this.props.currentUser.id);
  }


  render() {
    if (!this.props.user) {
      return null
    }
    return (
      <li className="request-item">
        <img id="request-img" src={this.props.user.profilePicUrl} />
        <Link to={`/users/${this.props.user.id}`}>
          {this.props.user.firstName} {this.props.user.lastName}
        </Link>
        <button id="accept-friend" title="Accept Friend Request" onClick={this.addFriendship}>Confirm</button>
        <button id="reject-friend" title="Delete Friend Request" onClick={this.deleteRequest}>Delete</button>
      </li>
    )
  }
}

