import React, { Component } from "react";
import Dog from "./Dog";

class DogFinder extends Component {
  render() {
    return (
      <div>
        <h1>Pick a Dog!</h1>
        {this.props.dogs.map(dog => (
          <div>
            <h1>{dog.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default DogFinder;
