import React from 'react';
import Nav from './Nav';

const AppIndex = props => {
  return (
    <div>
      <Nav />
      
        {props.children}
      
    </div>
  );
}

export default AppIndex;