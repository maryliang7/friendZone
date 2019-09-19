import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchAllUsers, fetchUser, fetchCurrentUser } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.userId]
  let currentUser = state.entities.users[state.session.id]
  let friends = state.entities.users[state.session.id].friendIds
  let firstFriendIds;
  if (state.entities.users[ownProps.match.params.userId]) {
    firstFriendIds = state.entities.users[ownProps.match.params.userId].friendIds.slice(0, 9);
  }
  let users = state.entities.users
  return { user, currentUser, friends, firstFriendIds, users }
};



const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
