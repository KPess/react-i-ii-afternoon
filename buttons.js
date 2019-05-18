import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="buttons">
        <button
          className="previous"
          onClick={() => {
            this.setState({ index: this.props.index - 1 });
          }}
        >
          Previous
        </button>
        <button className="next"
          onClick={() => {
            this.setState({ index: this.props.index + 1 });
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Buttons;
