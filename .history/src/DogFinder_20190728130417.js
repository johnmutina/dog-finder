import React, { Component } from "react";
import Dog from "./Dog";

class DogFinder extends Component {
  render() {
    return (
      <div className="DogFinder">
        <h1>Pick a Dog!</h1>
        {this.props.dogs.map(dog => (
          <Link to="./">
            <div className="DogFinder-container">
              <img src={dog.src} alt={dog.name} />
              <h1>{dog.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default DogFinder;
