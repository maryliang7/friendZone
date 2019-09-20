import { connect } from 'react-redux';
import Newsfeed from './newsfeed';
import { fetchAllUsers } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],

});

const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);