import React from 'react';
import PostsFormContainer from '../posts/posts_form_container';
import PostsIndexContainer from '../posts/posts_index_container';
import { Link } from 'react-router-dom';
import { formatDateAbout } from '../../util/date_util';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sender_id: "",
      receiver_id: ""
    }
    this.unfriend = this.unfriend.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.removeRequest = this.removeRequest.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  unfriend() {
    this.props.deleteFriendship(this.props.isFriends.id);
  }

  addFriend() {
    // debugger
    this.setState({ sender_id: this.props.currentUser.id, receiver_id: this.props.user.id }, () => {
      this.props.sendFriendRequest(this.state);
    })
  }

  removeRequest() {
    this.props.deleteFriendRequest(this.props.requested.id);
  }

  render() {
    let friendButtonStatus;
    debugger
    if (this.props.isFriends.length) {
      friendButtonStatus = <button className="friend-button b-strangers" title="Unfriend" onClick={this.unfriend}><i className="fas fa-check"></i>Friends</button>
    } else if (this.props.requested.length) {
      friendButtonStatus = <button className="friend-button b-added" title="Delete Friend Request" onClick={this.removeRequest}><i className="fas fa-spinner"></i>Friend Request Sent</button>
    } else {
      friendButtonStatus = <button className="friend-button b-friends" onClick={this.addFriend}><i className="fas fa-user-plus"></i>Add Friend</button>
    }

    const coverButtons = (this.props.user === this.props.currentUser) ? (
      <div>
        <Link to={`/users/${this.props.currentUser.id}/edit`}><button className="edit-prof-button"><i className="fas fa-user-edit"></i> Update Profile</button></Link>
      </div>
    ) : (
      <div>
        {friendButtonStatus}
        <button className="message-button"><i className="far fa-envelope"></i>Message</button>
      </div>
    )

    if (Object.keys(this.props.user).length === 0) {
      return null;
    }
    return(
      <div className="user-page">
        <div className="user-content">
          <div className="cover-photo">
            <img src={this.props.user.coverPicUrl} />
            <p className="profile-name">{this.props.user.firstName} {this.props.user.lastName}</p>
            {coverButtons}
          </div>
          <div className="profile-pic">
            <img src={this.props.user.profilePicUrl} />
          </div>
          <div className="profile-nav">
            <ul>
              <li className="user-nav-first" id="current-tab">Timeline</li>
              <Link to={`/users/${this.props.user.id}/about`}><li>About</li></Link>
              <Link to={`/users/${this.props.user.id}/friends`}><li>Friends</li></Link>
              <Link to={`/users/${this.props.user.id}/photos`}><li>Photos</li></Link>
            </ul>
          </div>
          <section className="profile-content">
            <div className="pc-left">
              <div className="pc-left-about">
                <section>
                  <i className="fas fa-info-circle"></i>
                  Intro
                </section>
                <section className="about-bio">
                  {this.props.user.aboutMe}
                </section>
                <div className="intro-about">
                  <section><i className="fas fa-home"></i>Lives in {this.props.user.location}</section>
                  <section><i className="fas fa-map-marker-alt"></i>From {this.props.user.hometown}</section>
                  <section><i className="far fa-clock"></i>Joined {formatDateAbout(this.props.user.createdAt)}</section>
                </div>
              </div>
              <div className="pc-left-photos">
                <section>
                  <i className="fas fa-image"></i>
                  Photos
                </section>
              </div>
              <div className="pc-left-friends">
                <section>
                  <i className="fas fa-users"></i>
                  Friends
                </section>
              </div>
            </div>
            <div className="pc-right">
              <div className="profile-post-form">
                <PostsFormContainer />
              </div>
              <div className="profile-posts">
                <PostsIndexContainer />
              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}

UserShow.defaultProps = {
  user: {}
};