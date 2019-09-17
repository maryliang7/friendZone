import { connect } from 'react-redux';
import UserShow from './user_show';
import { sendFriendRequest, deleteFriendRequest, deleteFriendship } from '../../actions/friend_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import * as FriendStatus from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.userId]
  let currentUser = state.entities.users[state.session.id]
  debugger
  let requested = FriendStatus.sentRequest(state, user, currentUser)
  let isFriends = FriendStatus.isFriends(state, user, currentUser)
  return { user, currentUser, requested, isFriends }
};



const mapDispatchToProps = (dispatch) => ({
  sendFriendRequest: (request) => dispatch(sendFriendRequest(request)),
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
  deleteFriendship: (friendship) => dispatch(deleteFriendship(friendship)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
