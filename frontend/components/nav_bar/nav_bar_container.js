import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { deleteFriendRequest, addFriendship } from '../../actions/friend_actions';
import { request } from 'https';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  deleteFriendRequest: (request) => dispatch(deleteFriendRequest(request)),
  addFriendship: (friendship) => dispatch(addFriendship(friendship))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
