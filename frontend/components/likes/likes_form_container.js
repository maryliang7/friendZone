import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LikesForm from './likes_form';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = function (state, ownProps) {
  let currentUser = state.entities.users[state.session.id];
  let postId = ownProps.postId
  let like = Object.values(state.entities.likes).filter(like => like.userId === currentUser.id && like.postId === postId)
  let liked = like.length ? true : false

  return { currentUser, postId, like, liked }

};

const mapDispatchToProps = (dispatch) => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikesForm));
