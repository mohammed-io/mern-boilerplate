import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Post = props => {
  return (
    <div className="container-fluid">
      <div style={{ paddingTop: 50 }}></div>
      <Link to={`posts/${props.slug}`}>
        <img src={props.featuredImage} />
        <h1>{props.title}</h1>
      </Link>
    </div>
  );
}


Post.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

export default Post;