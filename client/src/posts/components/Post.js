import React, { Component, PropTypes } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props._id}
        <h1>{this.props.title}</h1>
        <p><span style={{ fontWeight: 'bold' }}>Slug:</span> {this.props.slug}</p>
        <p><span style={{ fontWeight: 'bold' }}>Content:</span> {this.props.content}</p>
      </div>
    )
  }
}


Post.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post;