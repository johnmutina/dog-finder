import React, { Component } from "react";
import "./Dog.css";

class Dog extends Component {
  render() {
    let { dog } = this.props.dog;
    return (
      <div className="Dog">
        {console.log(this.props)}
        {/* <img src={this.props.src} alt={`${this.props.name}`} />
        <h1>{this.props.name}</h1>
        <h3>{this.props.age} years old</h3>
        <ul>
          {this.props.facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
        <button onClick={this.props.history.goBack}>Go Back</button> */}
      </div>
    );
  }
}

export default Dog;
