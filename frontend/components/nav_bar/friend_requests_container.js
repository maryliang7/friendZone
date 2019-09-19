import { connect } from 'react-redux';
import FriendRequests from './friend_request';
import { deleteFriendRequest } from '../../actions/friend_actions';
import { fetchCurrentUser } from '../../actions/session_actions';
import { allReceivedRequests } from '../../reducers/selectors';

const mapStateToProps = (state) => {

  return ({
  currentUser: state.entities.users[state.session.id],
  requests: allReceivedRequests(state, state.entities.users[state.session.id]),
  users: state.entities.users
})
}

const mapDispatchToProps = (dispatch) => ({
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
  fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(FriendRequests);


