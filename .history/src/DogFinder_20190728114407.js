import React, { Component } from "react";
import Dog from "./Dog";

class DogFinder extends Component {
  render() {
    return (
      <div>
        {this.props.dogs.map(dog => (
          <Dog {...dog} />
        ))}
      </div>
    );
  }
}

export default DogFinder;
