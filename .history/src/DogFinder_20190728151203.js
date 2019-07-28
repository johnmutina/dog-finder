import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogFinder.css";

class DogFinder extends Component {
  render() {
    return (
      <div className="DogFinder">
        <h1>Pick a Dog!</h1>
        <div className="DogFinder-container">
          {this.props.dogs.map(dog => (
            <Link to={`/dogs/${dog.name}`}>
              <div className="DogFinder-container">
                <img src={dog.src} alt={dog.name} />
                <h1>{dog.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default DogFinder;
