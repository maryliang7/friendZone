import { connect } from 'react-redux';
import PostsIndexItem from './posts_index_item';

const mapStateToProps = (state) => ({
  users: state.entities.users
});


const mapDispatchToProps = (dispatch) => ({
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (id) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndexItem)