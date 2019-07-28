import React, { Component } from "react";
import Dog from "./Dog";

class DogFinder extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <Dog />
      </div>
    );
  }
}

export default DogFinder;
