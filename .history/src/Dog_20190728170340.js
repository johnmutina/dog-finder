import React, { Component } from "react";
import "./Dog.css";

class Dog extends Component {
  render() {
    let { dog } = this.props.dog;
    return (
      <div className="Dog">
        {console.log(this.props)}
        <img src={dog.src} alt={`${dog.name}`} />
        <h1>{dog.name}</h1>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
        <button onClick={dog.history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default Dog;
