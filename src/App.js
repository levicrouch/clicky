import React, { Component } from 'react';
import Navbar from '../src/components/Navbar/Navbar.js';
import Wrapper from '../src/components/Wrapper/Wrapper.js';
import ImageTile from '../src/components/ImageTile/ImageTile.js';
import Images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Images
  };
  shuffleTiles = () => {
    console.log("You Clicked an image");
  };
  render() {
    return (
      <div className="container">
        <Navbar />
        <Wrapper>
          {this.state.Images.map(image => (
            <ImageTile
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
