import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class AppIndex extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <div className="main-container">
          {this.props.children}
        </div>
        
        <Footer />
      </div>
    );
  }
}