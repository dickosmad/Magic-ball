import "./Checkboxes.css";

import React from "react";

import Checkbox from "./Checkbox";

const LABELS = ["Flashing", "Rotating", "See-through", "Square"];

export default function Checkboxes({
  onChangingToSquare,
  onFlashing,
  onRotating,
  onSeeTrough,
  isSquared,
  isFlashing,
  isRotating,
  isSeeThrough,
}) {
  //console.log("Onflashing", onFlashing());
  return (
    <div className="checkboxes-container">
      {LABELS.map((label) => (
        <Checkbox
          key={label}
          label={label}
          onChangingToSquare={onChangingToSquare}
          onFlashing={onFlashing}
          onRotating={onRotating}
          onSeeTrough={onSeeTrough}
          isSquared={isSquared}
          isFlashing={isFlashing}
          isRotating={isRotating}
          isSeeThrough={isSeeThrough}
        />
      ))}
    </div>
  );
}
