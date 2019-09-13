import React from 'react';
import { Link } from 'react-router-dom';

export default class UserFriend extends React.Component {
  render() {
    return (
      <div className="user-page">
        <div className="user-content">
          <div className="cover-photo">
            <p className="profile-name">{this.props.currentUser.firstName} {this.props.currentUser.lastName}</p>
            <button className="friend-button">Add Friend</button>
            <button className="message-button">Message</button>
          </div>
          <div className="profile-pic">

          </div>
          <div className="profile-nav">
            <ul>
              <Link to={`/users/${this.props.currentUser.id}`}><li className="user-nav-first">Timeline</li></Link>
              <Link to={`/users/${this.props.currentUser.id}/about`}><li>About</li></Link>
              <li id="current-tab">Friends</li>
              <Link to={`/users/${this.props.currentUser.id}/photos`}><li>Photos</li></Link>
            </ul>
          </div>
          <section className="profile-content">
            <div className="user-friend">
              <p>Friends</p>
              <div className="friend-bottom">
                <div className="friend-left"></div>
                <div className="friend-right"></div>
              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}