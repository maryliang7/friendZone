import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { updateComment, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
  comments: ownProps.posts.comments
});


const mapDispatchToProps = (dispatch) => ({
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex)