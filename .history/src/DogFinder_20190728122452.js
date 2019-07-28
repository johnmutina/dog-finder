import React, { Component } from "react";
import Dog from "./Dog";

class DogFinder extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        {this.props.dogs.map(dog => (
          <Dog key={dog.name} {...dog.props} />
        ))}
      </div>
    );
  }
}

export default DogFinder;
