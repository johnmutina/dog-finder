import React, { Component } from "react";
import Dog from "./Dog";

class DogFinder extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.dogs)}
        {this.props.dogs.map(dog => <Dog info={...dog}></Dog>)}
        <Dog />
      </div>
    );
  }
}

export default DogFinder;
