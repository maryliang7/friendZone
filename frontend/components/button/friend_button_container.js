import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendButton from './friend_button';
import { sendFriendRequest, deleteFriendRequest, deleteFriendship, addFriendship } from '../../actions/friend_actions';
import { fetchCurrentUser } from '../../actions/session_actions';

import * as FriendStatus from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {

  let user = state.entities.users[ownProps.match.params.userId]
  let currentUser = state.entities.users[state.session.id]
  let num = parseInt(ownProps.match.params.userId);

  let sentReq = FriendStatus.sentRequest(state, currentUser, num)
  let recReq = FriendStatus.receivedRequest(state, currentUser, num)
  let friendshipId = FriendStatus.friendshipId(state, currentUser, num)

  return { user, currentUser, sentReq, recReq, friendshipId }
};



const mapDispatchToProps = (dispatch) => ({
  sendFriendRequest: (request) => dispatch(sendFriendRequest(request)),
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
  deleteFriendship: (friendship) => dispatch(deleteFriendship(friendship)),
  addFriendship: (friendship) => dispatch(addFriendship(friendship)),
  fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendButton));