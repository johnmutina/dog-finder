import React, { Component } from "react";

class Dog extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <img src={this.props.img} />
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Dog;
