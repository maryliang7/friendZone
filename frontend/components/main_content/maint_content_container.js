import { connect } from 'react-redux';
import MainContent from './main_content';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};


export default connect(mapStateToProps, null)(MainContent)