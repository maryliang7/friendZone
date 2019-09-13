import React from 'react';
import { Link } from 'react-router-dom';

export default class UserPhoto extends React.Component {
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
              <Link to={`/users/${this.props.currentUser.id}/friends`}><li>Friends</li></Link>
              <li id="current-tab">Photos</li>
            </ul>
          </div>
          <section className="profile-content">
            <div className="user-photo">
              <p>Photos</p>
              <div className="photo-bottom">
                <div className="photo-left"></div>
                <div className="photo-right"></div>
              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}