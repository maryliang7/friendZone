import { connect } from 'react-redux';
import Search from './search';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  searchResults: Object.values[state.entities.users]
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);