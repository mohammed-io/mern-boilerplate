import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import * as actions from '../../redux/actions/posts';

class SinglePost extends Component {  
  render() {
    const { _id, title, slug, content, timestamp } = this.props.post;
    return (
      <div>
        <h1>{title}</h1>
        <p>{slug}</p>
        <p>{content}</p>
        <p>{timestamp}</p>
      </div>
    );
  }
}


SinglePost.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    post: state.posts.singlePost.post
  }
}

function mapDispatchToProps(dispatch, props) {
  dispatch(actions.fetchPost(props.params.slug));
}


const FullSinglePost = connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost)


export default FullSinglePost;