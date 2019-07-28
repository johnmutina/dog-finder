import React, { Component } from "react";
import "./Dog.css";

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        {console.log(this.props)}
        <img src={this.props.dog.src} alt={`${this.props.dog.name}`} />
        <h1>{this.props.dog.name}</h1>
        <h3>{this.props.dog.age} years old</h3>
        <ul>
          {this.props.dog.facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
        <button onClick={this.props.history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default Dog;
