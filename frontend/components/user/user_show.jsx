import React from 'react';
import PostsFormContainer from '../posts/posts_form_container';
import { Link } from 'react-router-dom';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
              <li className="user-nav-first" id="current-tab">Timeline</li>
              <Link to={`/users/${this.props.currentUser.id}/about`}><li>About</li></Link>
              <Link to={`/users/${this.props.currentUser.id}/friends`}><li>Friends</li></Link>
              <Link to={`/users/${this.props.currentUser.id}/photos`}><li>Photos</li></Link>
            </ul>
          </div>
          <section className="profile-content">
            <div className="pc-left">
              <div className="pc-left-about">
                <h4>Intro</h4>
              </div>
              <div className="pc-left-photos">
                <h4>Photos</h4>
              </div>
              <div className="pc-left-friends">
                <h4>Friends</h4>
              </div>
            </div>
            <div className="pc-right">
              <div className="profile-post-form">
                <PostsFormContainer />
              </div>
              <div className="profile-posts">

              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}