import React, { Component } from "react";

class Dog extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name}
          {console.log(this.props)}
        </h1>
      </div>
    );
  }
}

export default Dog;
