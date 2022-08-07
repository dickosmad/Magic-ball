import "./Ball.css";

import React from "react";

export default function Ball({
  onChangingToSquare,
  onFlashing,
  onRotating,
  onSeeTrough,
}) {
  let ballClasses = "ball";
  if (onChangingToSquare) ballClasses += " " + onChangingToSquare;
  if (onFlashing) ballClasses += " " + onFlashing;
  if (onRotating) ballClasses += " " + onRotating;
  if (onSeeTrough) ballClasses += " " + onSeeTrough;

  return (
    <div className={ballClasses}>
      <p>henlo</p>
    </div>
  );
}
