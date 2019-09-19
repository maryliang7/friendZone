import { connect } from 'react-redux';
import UserFriend from './user_friend';
import { fetchAllUsers, fetchUser } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id]

});

const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (id) => dispatch(fetchUser(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(UserFriend);