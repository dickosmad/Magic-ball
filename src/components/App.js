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
    this.setState({ isFlashing: !this.state.isFlashing });
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
          isSquared={this.state.isSquared}
          isFlashing={this.state.isFlashing}
          isRotating={this.state.isRotating}
          isSeeThrough={this.state.isSeeThrough}
        />
      </div>
    );
  }
}
