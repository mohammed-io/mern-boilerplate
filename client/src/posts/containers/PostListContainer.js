import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/posts';

class PostList extends Component {
  render() {
    return (
      <ul>
      </ul>
    )
  }
}

// PostList.propTypes = {
//   posts: PropTypes.array.isRequired
// }

function mapStateToProps(state) {
  posts: state.posts
}

function mapDispatchToProps(dispatch) {
  dispatch(actions.fetchPosts())
}

const FullPostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)


export default FullPostList;
