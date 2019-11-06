import { connect }  from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentsForm from './comments_form';
import { createComment, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = function (state, ownProps) {
  let currentUser = state.entities.users[state.session.id];
  let postId = ownProps.postId

  return { currentUser, postId }

};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsForm));

