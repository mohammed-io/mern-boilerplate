import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/posts';
import Post from '../components/Post';

class PostListContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchPosts());
  }

  render() {
    return (
      <div className='col-lg-4'>
        {this.props.posts.map(post =>
          <Post
            key={post._id}
            title={post.title}
            slug={post.slug}
            content={post.content}
            featuredImage={post.featuredImage}
            timestamp={post.timestamp}
          />
        )}
      </div>
    );
  }
}

PostListContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired).isRequired
}

function mapStateToProps(state) {
  return {
    posts: state.posts.allPosts.posts
  }
}


export default connect(mapStateToProps)(PostListContainer);
