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
    highScore: 0,
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
  winGame = () => {
    alert("You Win!");
    this.setState({
      highScore: this.state.score,
      clickedId: 0,
      score: 0,
    });
  }
  loseGame = () => {
    alert("You clicked the same tile twice!");
    alert("You lose!");
    this.setState({
      highScore: this.state.score,
      clickedId: 0,
      score: 0,
    });
  }
  calculateScore = card => {
    if (this.state.clickedId === 0) {
      this.setState({
        // set clickedId to the id of the fist card clicked
        clickedId: card.id,
        // update the score
        score: this.state.score + 1
      })
    } else {
      // Enter here when we have already clicked one card and click a new card
      this.setState({
        // update the score
        score: this.state.score + 1
      })
      if (this.state.clickedId === card.id) {
        // LOSE condition (clicked the initial card twice)
        this.loseGame()
      } else if (this.state.score === 9) {
        // Win condition, clicked 9 tiles without hitting the same tile twice
        this.winGame()
        };
      }
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
