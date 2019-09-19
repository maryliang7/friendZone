import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchAllUsers, fetchUser, fetchCurrentUser } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.userId]
  let currentUser = state.entities.users[state.session.id]

  return { user, currentUser, friends: state.entities.users[state.session.id].friendIds }
};



const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
