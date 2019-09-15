import { connect } from 'react-redux';
import UserAbout from './user_about';
import { sendFriendRequest, deleteFriendRequest, deleteFriendship } from '../../actions/friend_actions';
import { fetchAllUsers } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id]

});

const mapDispatchToProps = (dispatch) => ({
  sendFriendRequest: (request) => dispatch(sendFriendRequest(request)),
  deleteFriendRequest: (requestId) => dispatch(deleteFriendRequest(requestId)),
  deleteFriendship: (friendship) => dispatch(deleteFriendship(friendship)),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAbout);