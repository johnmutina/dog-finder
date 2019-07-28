import React, { Component } from "react";
import Dog from "./Dog";

class DogFinder extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.dogs)}
        {/* {this.props.dogs.map(dogs => <Dog info={...dogs}></Dog>)} */}
        <Dog />
      </div>
    );
  }
}

export default DogFinder;
