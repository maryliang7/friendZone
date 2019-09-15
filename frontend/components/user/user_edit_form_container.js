import UserEditForm from './user_edit_form';
import { connect } from 'react-redux'
import { updateUser } from '../../actions/session_actions'; 
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEditForm));