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
            <li className="newsfeed-default"><i className="far fa-newspaper"></i>NewsFeed</li>
            <li><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/mary-liang-4455b7194/">LinkedIn</a></li>
            <li><i className="fab fa-github"></i><a href="https://github.com/maryliang7">Github</a></li>
            <li><i className="fas fa-code-branch"></i><a href="https://github.com/maryliang7/friendZone">friendZone Repo</a></li>

            <div className="ad-groups">
              <p>Groups</p>
              <li><i className="fas fa-paw"></i>Cool Dog Group</li>
              <li><i className="fas fa-binoculars"></i>Dogspotting</li>
              <li><i className="fas fa-user-ninja"></i>Subtle Asian Traits&nbsp;</li>
            
            </div>

          </div>
          <div className="newsfeed-postform">
            <PostsFormContainer user={this.props.currentUser} />
          </div>
          <div className="newsfeed-index">
            <PostsIndexContainer locationIds={this.state} newsfeed={true} />
          </div>

        </div>
      </div>
    )
  }
}
