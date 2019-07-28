import React, { Component } from "react";

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <img src={this.props.src} alt={`${this.props.name}`} />
        <h1>{this.props.name}</h1>
        <h3>{this.props.age} years old</h3>
        <ul>
          {this.props.facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dog;
