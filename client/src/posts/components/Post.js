import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Post extends Component {
  render() {
    const { _id, title, slug, content, timestamp } = this.props;
    return (
      <div className="container-fluid">
        <div style={{ paddingTop: 50}}></div>
        <Link to={`posts/${slug}`}>
          <h1>{title}</h1>
          <p>{_id}</p>
          <p>{slug}</p>
          <p>{content}</p>
          <p>{timestamp}</p>
        </Link>
      </div>
    )
  }
}


Post.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

export default Post;