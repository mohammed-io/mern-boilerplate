import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Post extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div style={{ paddingTop: 50}}></div>
        <p><span style={{ fontWeight: 'bold' }}>Title:</span> {this.props.title}</p>
        <p><span style={{ fontWeight: 'bold' }}>ID:</span> {this.props._id}</p>
        <p><span style={{ fontWeight: 'bold' }}>Slug:</span> {this.props.slug}</p>
        <p><span style={{ fontWeight: 'bold' }}>Content:</span> {this.props.content}</p>
        <p><span style={{ fontWeight: 'bold' }}>Timestamp:</span> {this.props.timestamp}</p>
        <Link to={`posts/${this.props.slug}`}>Read More...</Link>
        <div style={{ padding: 50}}></div>
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