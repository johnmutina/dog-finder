import React, { Component } from "react";

class Dog extends Component {
  render() {
    return (
        { console.log(this.props) }
      <div>
        <h1>
          {this.props.name}
        </h1>

      </div>
    );
  }
}

export default Dog;
