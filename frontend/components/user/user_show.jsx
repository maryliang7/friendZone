import React from 'react';
import PostsFormContainer from '../posts/posts_form_container';

export default class UserShow extends React.Component {
  render() {
    return(
      <div className="user-page">
        <div className="user-content">
          <div className="cover-photo">

          </div>
          <div className="profile-pic">

          </div>
          <div className="profile-nav">
            <ul>
              <li>Timeline</li>
              <li>About</li>
              <li>Friends</li>
              <li>Photos</li>
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