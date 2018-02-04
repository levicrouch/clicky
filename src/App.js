import React, { Component } from 'react';
import Navbar from '../src/components/Navbar.js';
import Images from '../src/components/Images.js';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Navbar />
      <Images />
        
      </div>
    );
  }
}

export default App;
