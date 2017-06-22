import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AppIndex = props => {
  return (
    <div>
      <Header />
      
        {props.children}
      
      <Footer />
    </div>
  );
}

export default AppIndex