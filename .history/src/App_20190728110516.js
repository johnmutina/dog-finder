import React, { Component } from "react";
import "./App.css";
import DogFinder from "./DogFinder";

class App extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
  }
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
