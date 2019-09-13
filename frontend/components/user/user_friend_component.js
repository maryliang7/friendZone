import { connect } from 'react-redux';
import UserFriend from './user_friend';
import { sendFriendRequest, deleteFriendRequest, deleteFriendship } from '../../actions/friend_actions';



const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id]

});

const mapDispatchToProps = (dispatch) => ({
  sendFriendRequest: (request) => dispatch(sendFriendRequest(request)),
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
  deleteFriendship: (friendship) => dispatch(deleteFriendship(friendship))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFriend);