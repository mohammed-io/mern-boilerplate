import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div>
      <div className="header">
          <Link to='/'>Home</Link>
          <Link to='/posts'>Blog</Link>
          <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}

export default Header;