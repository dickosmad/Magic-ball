import "./Ball.css";

import React from "react";

export default class Ball extends React.Component {
  state = {
    color: "red",
  };

  render() {
    const { color } = this.state;
    return (
      <div className="ball rotating flashing">
        <p>henlo</p>
      </div>
    );
  }
}
