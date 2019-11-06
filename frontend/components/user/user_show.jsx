import React from 'react';
import PostsFormContainer from '../posts/posts_form_container';
import PostsIndexContainer from '../posts/posts_index_container';
import { Link } from 'react-router-dom';
import { formatDateAbout } from '../../util/date_util';
import FriendButtonContainer from '../button/friend_button_container';
import SidebarFriends from './friends/sidebar_friends';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchCurrentUser(this.props.currentUser.id)
    this.props.fetchAllUsers();


  }


  render() {
    if (Object.keys(this.props.user).length === 0) {
      return null;
    }

    const coverButtons = (this.props.user === this.props.currentUser) ? (
      <div>
        <Link to={`/users/${this.props.currentUser.id}/edit`}><button className="edit-prof-button"><i className="fas fa-user-edit"></i> Update Profile</button></Link>
      </div>
    ) : (
      <div>
        <FriendButtonContainer />
        <button className="message-button"><i className="far fa-envelope"></i>Message</button>
      </div>
    )

    if ( !this.props.friends.includes(this.props.user.id) && this.props.user.id !== this.props.currentUser.id) {
      return (
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
                <li className="disabled-nav">About</li>
                <li className="disabled-nav">Friends</li>
                <li className="disabled-nav">Photos</li>
              </ul>
            </div>


            <section className="profile-private">
              <section className="not-friends">
                <p>Do you know {this.props.user.firstName} {this.props.user.lastName} ?</p>
                <div className="not-friends-bottom">
                  Send {this.props.user.firstName} a friend request to see what they share.
                </div>
              </section>

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
                <div className="private-dot">
                  <i className="fas fa-dot-circle"></i>
                </div>
              </div>

            </section>
          </div>
        </div>
      )
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
                <div className="sidebar-friends">
                  {this.props.firstFriendIds.map((friendId) => <SidebarFriends key={friendId} user={this.props.users[friendId]} />)}
                </div>
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