import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './about_tab';

export default class UserAbout extends React.Component {
  render() {
    console.log(this.props.user)
    const aboutPane = [
      {title: 'Overview', content: this.props.user},
      {title: 'Work and Education', content: this.props.user},
      {title: 'Places They Lived', content: this.props.user},
      {title: 'Contact and Basic Info', content: this.props.user}
    ]
    return(
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
              <li id="current-tab">About</li>
              <Link to={`/users/${this.props.currentUser.id}/friends`}><li>Friends</li></Link>
              <Link to={`/users/${this.props.currentUser.id}/photos`}><li>Photos</li></Link>
            </ul>
          </div>
          <section className="profile-content">
            <div className="user-about">
              <p>About</p>
              <div className="about-bottom">
                <Tabs aboutPane={aboutPane} />
              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}