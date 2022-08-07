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
  handleChangeToSquare = () => {
    this.setState({ ...this.state, isSquared: !isFlashing });
  };
  handleChangeOnRotating = () => {
    this.setState({ ...this.state, isRotating: !isFlashing });
  };
  handleChangeOnSeeTrough = () => {
    this.setState({ ...this.state, isSeeThrough: !isFlashing });
  };
  render() {
    return (
      <div className="container">
        <h1>A Magic Ball</h1>
        <Ball
          onChangingToSquare={this.state.isSquared}
          onFlashing={this.state.isFlashing}
          onRotating={this.state.isRotating}
          onSeeTrough={this.state.isSeeThrough}
        />
        <Checkboxes
          onChangingToSquare={this.handleChangeToSquare}
          onFlashing={this.handleChangeFlashing}
          onRotating={this.handleChangeOnRotating}
          onSeeTrough={this.handleChangeOnSeeTrough}
        />
      </div>
    );
  }
}
