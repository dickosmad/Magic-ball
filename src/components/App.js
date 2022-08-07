import React, { Component } from "react";
import Ball from "./Ball";
import Checkboxes from "./Checkboxes";

export default class App extends Component {
  state = {
    isFlashing: false,
    isSquared: false,
    isRotating: false,
    isSeeThrough: false,
  };
  handleChangeFlashing = () => {
    this.setState({ ...this.state, isFlashing: !isFlashing });
  };
  handleChangeSquare = () => {
    this.setState({ ...this.state, isSquared: !isFlashing });
  };
  handleChangeRotating = () => {
    this.setState({ ...this.state, isRotating: !isFlashing });
  };
  handleChangeSeeTrough = () => {
    this.setState({ ...this.state, isSeeThrough: !isFlashing });
  };
  render() {
    return (
      <div className="container">
        <h1>A Magic Ball</h1>
        <Ball onFlashChanging={handleChangeFlashing} />
        <Checkboxes />
      </div>
    );
  }
}
