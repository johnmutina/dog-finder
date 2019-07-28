import React, { Component } from "react";

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        {console.log(this.props)}
        <img src={this.props.src} alt={`${this.props.name}`} />
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Dog;
