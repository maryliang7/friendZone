import { connect } from 'react-redux';
import PostsForm from './posts_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = function (state, ownProps) {
  let currentUser = state.entities.users[state.session.id];  
  let user = state.entities.users[ownProps.match.params.userId] || currentUser.id
  
  return { currentUser, user }

};

const mapDispatchToProps = function (dispatch) {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsForm));

