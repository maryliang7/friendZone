import { connect } from 'react-redux';
import FriendRequestItem from './friend_request_item';
import { deleteFriendRequest, addFriendship } from '../../actions/friend_actions';
import { fetchCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
  addFriendship: (friendship) => dispatch(addFriendship(friendship)),
  fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestItem);


