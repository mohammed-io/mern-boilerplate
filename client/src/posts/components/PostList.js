import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostListContainer from '../containers/PostListContainer';

class PostList extends Component {
  render() {
    return (
      <div>
        <PostListContainer />
      </div>
    );
  }
}

export default PostList;
