import React, { Component } from 'react';
import MainContainer from '../src/components/MainContainer.js';
import Navbar from '../src/components/Navbar.js';
import Images from '../src/components/Images.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainContainer />
      <Navbar />
      <Images />
        
      </div>
    );
  }
}

export default App;
