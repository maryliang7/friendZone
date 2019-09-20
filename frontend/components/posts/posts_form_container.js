import { connect } from 'react-redux';
import PostsForm from './posts_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = function (state, ownProps) {
  let currentUser = state.entities.users[state.session.id];  
  let user = state.entities.users[ownProps.match.params.userId] || currentUser.id
  
  return { currentUser, user }

};

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchUser: (id) => dispatch(fetchUser(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsForm));

