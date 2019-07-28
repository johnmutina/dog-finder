import React, { Component } from "react";
import "./App.css";
import DogFinder from "./DogFinder";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO: ADD NAVBAR */}
        <DogFinder />
      </div>
    );
  }
}

export default App;
