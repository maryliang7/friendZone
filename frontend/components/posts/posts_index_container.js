import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { withRouter } from 'react-router-dom';
import { fetchPosts, clearPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.userId];
  let num = parseInt(ownProps.match.params.userId)
  let currentUser = state.entities.users[state.session.id];
  let posts = Object.values(state.entities.posts).reverse();
  let locationIds = ownProps.locationIds || { location_id: num };
  let newsfeed = ownProps.newsfeed || false;

  return { user, currentUser, posts, locationIds, newsfeed }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (query) => dispatch(fetchPosts(query)),
  clearPosts: () => dispatch(clearPosts())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsIndex));