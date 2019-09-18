import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { withRouter } from 'react-router-dom';
import { fetchPosts, clearPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  posts: Object.values(state.entities.posts)
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (query) => dispatch(fetchPosts(query)),
  clearPosts: () => dispatch(clearPosts())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsIndex));