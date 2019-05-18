import React from "react";
import { Component } from "react";
import Data from "./components/data";
import Header from "./components/header";
import Slide from "./components/slide";
import Buttons from "./components/buttons";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: Data,
      index: 0
    };
    console.log(this.state.data);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Slide peopleData={this.state.data[this.state.index]} />
        <div className="buttons">
          <button
            className="previous"
            onClick={() => {
              if (this.state.index > 0) {
                this.setState({ index: this.state.index - 1 });
              }
            }}
          >
          	&lt;	 Previous
          </button>
          <button className="next"
            onClick={() => {
              if (this.state.index < Data.length - 1) {
                this.setState({ index: this.state.index + 1 });
              }
            }}
          >
            Next &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default App;
