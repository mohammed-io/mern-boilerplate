import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/posts';
import Post from './Post';
import ReactHtmlParser from 'react-html-parser';

class SinglePost extends Component {
  
  componentWillMount() {
    const { dispatch, params } = this.props;
    dispatch(actions.fetchPost(params.slug));
  }

  render() {
    const { _id, title, slug, content, timestamp, featuredImage } = this.props.post;
    return (
      <div className='col-lg-6 col-lg-offset-3'>
        <img src={featuredImage} />
        <h1>{title}</h1>
        <p>{ ReactHtmlParser(content) }</p>
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


export default connect(mapStateToProps)(SinglePost);