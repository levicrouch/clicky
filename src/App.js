import React, { Component } from 'react';
import Navbar from '../src/components/Navbar/Navbar.js';
import Wrapper from '../src/components/Wrapper/Wrapper.js';
import ImageTile from '../src/components/ImageTile/ImageTile.js';
import Images from "./images.json";

class App extends Component {
  // Setting this.state.Images to the imported Images json array
  state = {
    Images,
    score: 0,
    clickedId: 0
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  calculateScore = card => {
    if(this.state.clickedId === 0) {
      this.setState({
        clickedId: card.id
      })
      console.log("set id", this.state.clickedId);
    } else {
      console.log("check id",this.state.clickedId, card.id);

      if(this.state.clickedId === card.id) {
        // reset score and state to 0
        // set high score
        alert("LOSER");
      } else {
        alert("WINNER");
      }
    }
   
    // this.setState({
    //   score: this.state.score + 1
    // })

    // count number of clicks on each image
    // increment clickcounter each time an im age is clicked once but not twice
    // capture the id of the image clicked
    // update the score when player loses

  }
  render() {
    return (
      <div className="container">
        <Navbar score={this.state.score} />
        <Wrapper>
          {this.state.Images.map(image => (
            <ImageTile
            calculateScore={this.calculateScore}
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
