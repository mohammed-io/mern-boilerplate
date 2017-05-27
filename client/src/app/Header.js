import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/posts'>Blog</Link>
            <Link to='/store'>Store</Link>
            <Link to='/contact'>Contact</Link>
        </div>
      </div>
    );
  }
}

export default Header;