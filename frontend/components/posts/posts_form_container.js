import { connect } from 'react-redux';
import PostsForm from './posts_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = function (state, ownProps) {
  debugger
  return {
    user: state.entities.users[ownProps.match.params.userId]

  }

};

const mapDispatchToProps = function (dispatch) {
  return {
    createPost: (post) => dispatch(createPost(post))

  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsForm));

