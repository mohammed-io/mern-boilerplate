import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/posts';
import Post from './Post';

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post =>
          <Post
            key={post._id}
            title={post.title}
            slug={post.slug}
            content={post.content}
            timestamp={post.timestamp}
          />
        )}
      </div>
    );
  }
}

PostList.propTypes = {
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

function mapDispatchToProps(dispatch) {
  dispatch(actions.fetchPosts())
}

const FullPostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)


export default FullPostList;
