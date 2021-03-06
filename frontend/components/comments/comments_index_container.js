import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { updateComment, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  let users = state.entities.users;
  let allComments = Object.values(state.entities.comments);
  let comments = allComments.filter(comment => comment.postId === ownProps.postId);

  return { users, comments }
};


const mapDispatchToProps = (dispatch) => ({
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex)