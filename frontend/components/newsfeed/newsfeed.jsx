import React from 'react';
import PostsFormContainer from '../posts/posts_form_container';
import PostsIndexContainer from '../posts/posts_index_container';

export default class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.friendIds.concat(this.props.currentUser.id)
    }

  }

  componentDidMount() {
    this.props.fetchAllUsers();
    window.scrollTo(0,0)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.props.fetchPosts(this.state);
    }
  }


  render() {
    let { currentUser } = this.props;
    if (!currentUser) {
      return null;
    }

    return(
      <div className="newsfeed">
        <div className="newsfeed-content">
          <div className="newsfeed-ads">
            <div className="newsfeed-header">
              <img src={currentUser.profilePicUrl} />
              {currentUser.firstName} {currentUser.lastName}
            </div>
            <li className="newsfeed-default"><i class="far fa-newspaper"></i>NewsFeed</li>
            <li><i class="fab fa-github"></i><a href="https://github.com/maryliang7">Github</a></li>
            <li><i class="fas fa-code-branch"></i><a href="https://github.com/maryliang7/friendZone">friendZone Repo</a></li>

            <div className="ad-groups">
              <p>Groups</p>
              <li><i class="fas fa-paw"></i>Cool Dog Group</li>
              <li><i class="fas fa-paw"></i>Dogspotting</li>
              <li><i class="fas fa-user-ninja"></i>Subtle Asian Traits&nbsp;</li>
            
            </div>

          </div>
          <div className="newsfeed-postform">
            <PostsFormContainer user={this.props.currentUser} />
          </div>
          <div className="newsfeed-index">
            <PostsIndexContainer locationIds={this.state} />
          </div>

        </div>
      </div>
    )
  }
}
