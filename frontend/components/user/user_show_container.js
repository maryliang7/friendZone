import { connect } from 'react-redux';
import UserShow from './user_show';
import { sendFriendRequest, deleteFriendRequest, deleteFriendship } from '../../actions/friend_actions';
import { fetchAllUsers, fetchUser } from '../../actions/session_actions';
import * as FriendStatus from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.userId]
  let currentUser = state.entities.users[state.session.id]
  let num = parseInt(ownProps.match.params.userId);
  // debugger
  let sentReq = FriendStatus.sentRequest(state, currentUser, num)
  let recReq = FriendStatus.receivedRequest(state, currentUser, num)
  // let isFriends = FriendStatus.isFriends(state, currentUser, user)
  let isFriends;
  return { user, currentUser, sentReq, recReq, isFriends }
};



const mapDispatchToProps = (dispatch) => ({
  sendFriendRequest: (request) => dispatch(sendFriendRequest(request)),
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
  deleteFriendship: (friendship) => dispatch(deleteFriendship(friendship)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
