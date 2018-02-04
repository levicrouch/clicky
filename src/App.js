import React, { Component } from 'react';
import Navbar from '../src/components/Navbar/Navbar.js';
import Wrapper from '../src/components/Wrapper/Wrapper.js';
import ImageTile from '../src/components/ImageTile/ImageTile.js';
import Images from "./images.json";

class App extends Component {
  // Setting this.state.Images to the imported Images json array
  state = {
    Images
  };
  shuffleTiles = id => {
    // log clicks of id
    console.log("You clicked this image:",id);
  };
  render() {
    return (
      <div className="container">
        <Navbar />
        <Wrapper>
          {this.state.Images.map(image => (
            <ImageTile
              shuffleTiles={this.shuffleTiles}
              id={image.id}
              key={image.id}
              name={image.name}
              path={image.path}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
