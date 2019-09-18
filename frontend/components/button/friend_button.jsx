import React from 'react';
import { Link } from 'react-router-dom';


export default class FriendButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender_id: "",
      receiver_id: ""
    }
    this.unfriend = this.unfriend.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  unfriend() {
    this.props.deleteFriendship(this.props.friendshipId[0].id);
    this.props.fetchUser(this.props.currentUser.id);
  }

  sendRequest() {
    this.props.sendFriendRequest({ sender_id: this.props.currentUser.id, receiver_id: this.props.user.id });
    this.props.fetchUser(this.props.currentUser.id);
  }

  deleteRequest() {
    this.props.deleteFriendRequest(this.props.sentReq[0].id);
    this.props.fetchUser(this.props.currentUser.id);
  }

  addFriend() {
    this.props.deleteFriendRequest(this.props.recReq[0].id);
    this.props.addFriendship({ friend_one: this.props.user.id, friend_two: this.props.currentUser.id });
    this.props.fetchUser(this.props.currentUser.id);
  }


  render() {
    let friendButtonStatus;

    if (this.props.friendshipId && this.props.friendshipId.length) {
      friendButtonStatus = <button className="friend-button b-strangers" title="Unfriend" onClick={this.unfriend}><i className="fas fa-check"></i>Friends</button>
    } else if (this.props.sentReq && this.props.sentReq.length) {
      friendButtonStatus = <button className="friend-button b-added" title="Delete Friend Request" onClick={this.deleteRequest}><i className="fas fa-spin fa-spinner"></i>Friend Request Sent</button>
    } else if (this.props.recReq && this.props.recReq.length) {
      friendButtonStatus = <button className="friend-button b-added" title="Accept Friend Request" onClick={this.addFriend}><i className="fas fa-plus"></i>Accept Friend Request</button>
    } else {
      friendButtonStatus = <button className="friend-button b-friends" onClick={this.sendRequest}><i className="fas fa-user-plus"></i>Add Friend</button>
    }

    return(friendButtonStatus)
  }
}