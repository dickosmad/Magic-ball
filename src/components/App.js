import React, { Component } from "react";
import Ball from "./Ball";
import Checkboxes from "./Checkboxes";

export default class App extends Component {
  state = {
    ballState: [
      {
        id: 1,
        label: "Flashing",
        isChecked: false,
      },
      { id: 2, label: "Rotating", isChecked: false },
      { id: 3, label: "See-through", isChecked: false },
      { id: 4, label: "Square", isChecked: false },
    ],
  };
  handleChange = (id) => {
    const { ballState } = this.state;
    const newState = [...ballState].map((checkbox) => {
      checkbox.id === id
        ? { ...checkbox, isChecked: !this.state.isChecked }
        : checkbox;
    });
    this.setState({ ballState: newState });
  };

  render() {
    const { ballState } = this.state;
    return (
      <div className="container">
        <h1>A Magic Ball</h1>
        <Ball ballState={ballState} />
        <Checkboxes checkboxes={ballState} onChecked={this.handleChange} />
      </div>
    );
  }
}
