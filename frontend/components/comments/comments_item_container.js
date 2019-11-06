import { connect } from 'react-redux';
import CommentsItem from './comments_item';
import { updateComment, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  let users = state.entities.users;
  let currentUser = state.entities.users[state.session.id]
  let comment = ownProps.comment;
  return { users, comment, currentUser }
};


const mapDispatchToProps = (dispatch) => ({
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsItem)