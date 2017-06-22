import React from 'react';
import Header from './Header';

const AppIndex = props => {
  return (
    <div>
      <Header />
      
        {props.children}
      
    </div>
  );
}

export default AppIndex;