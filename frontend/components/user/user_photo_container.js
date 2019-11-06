import { connect } from 'react-redux';
import UserPhoto from './user_photo';
import { fetchAllUsers, fetchUser, updateUser } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (user, userId) => dispatch(updateUser(user, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPhoto);