import React, { Component } from "react";
import { Switch, Route, NavLink, Redirect, Nav } from "react-router-dom";
import DogFinder from "./DogFinder";
import Dog from "./Dog";
import "./App.css";

// Import all images in image folder
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./assets", false, /\.(gif|jpe?g|svg)$/)
);

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: images["whiskey.jpg"],
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: images["hazel.jpg"],
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: images["tubby.jpg"],
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };

  render() {
    return (
      <div className="App">
        {/* NAVBAR */}
        <div className="App-navbar">
          <NavLink exact to="/dogs" activeClassName="App-active-navlink">
            Home
          </NavLink>
          {this.props.dogs.map(dog => (
            <NavLink
              exact
              key={dog.name}
              to={`/dogs/${dog.name}`}
              activeClassName="App-active-navlink"
            >
              {dog.name}
            </NavLink>
          ))}
        </div>

        {/* ROUTES SETUP */}

        <Switch>
          <Route
            exact
            path="/dogs"
            render={routeProps => (
              <DogFinder dogs={this.props.dogs} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/dogs/:name"
            render={routeProps => (
              <Dog
                {...this.props.dogs.filter(
                  dog => dog.name === routeProps.match.params.name
                )[0]}
                {...routeProps}
              />
            )}
          />
          <Route render={() => <Redirect to="/dogs" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
