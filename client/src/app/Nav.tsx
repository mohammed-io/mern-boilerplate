import * as React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/posts'>Blog</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
}

export default Nav;