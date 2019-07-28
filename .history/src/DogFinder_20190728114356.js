import React, { Component } from "react";
import Dog from "./Dog";

class DogFinder extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.dogs[0])}
        {this.props.dogs.map(dog => (
          <Dog {...dog} />
        ))}
        <Dog />
      </div>
    );
  }
}

export default DogFinder;
