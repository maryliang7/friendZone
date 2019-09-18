import { connect } from 'react-redux';
import UserPhoto from './user_photo';
import { sendFriendRequest, deleteFriendRequest, deleteFriendship } from '../../actions/friend_actions';
import { fetchAllUsers, fetchUser } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id]

});

const mapDispatchToProps = (dispatch) => ({
  sendFriendRequest: (request) => dispatch(sendFriendRequest(request)),
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
  deleteFriendship: (friendship) => dispatch(deleteFriendship(friendship)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (id) => dispatch(fetchUser(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(UserPhoto);