import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import DogFinder from "./DogFinder";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "./assets/whiskey.jpg",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: "./assets/hazel.jpg",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "./assets/tubby.jpg",
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
        {console.log(this.defaultProps.dogs)}
      <div className="App">
        <div className="App-navbar">
          {/* TODO: ADD NAVBAR */}
          <Switch>
            <NavLink to="/dogs" activeClassName="App-active-navlink">
              HOME
            </NavLink>
            {/* {this.defaultProps.dogs.map(dog => ({
              <NavLink to={`/dogs/${dog.name}`} />
            }))} */}
          </Switch>
        </div>
        <h1>Dog Finder</h1>
        <Switch>
          <Route exact to="/dogs" render={() => <DogFinder />} />
          <Route exact to="/dogs/:name" />
          <Route component={DogFinder} />
        </Switch>
      </div>
    );
  }
}

export default App;
