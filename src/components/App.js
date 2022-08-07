import React, { Component } from "react";
import Ball from "./Ball";
import Checkboxes from "./Checkboxes";
import Checkbox from "./Checkboxes/Checkbox";

export default class App extends Component {
  state = {
    isFlashing: false,
    isSquared: false,
    isRotating: false,
    isSeeThrough: false,
  };
  handleChangeFlashing = () => {
    this.setState({ ...this.state, isFlashing: !this.state.isFlashing });
  };
  handleChangeToSquare = () => {
    this.setState({ ...this.state, isSquared: !this.state.isSquared });
  };
  handleChangeOnRotating = () => {
    this.setState({ ...this.state, isRotating: !this.state.isRotating });
  };
  handleChangeOnSeeTrough = () => {
    this.setState({ ...this.state, isSeeThrough: !this.state.isSeeThrough });
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
