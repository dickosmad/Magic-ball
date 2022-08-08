import "./Checkbox.css";
import React from "react";

export default function Checkbox({
  label,
  onChangingToSquare,
  onFlashing,
  onRotating,
  onSeeTrough,
  isSquared,
  isFlashing,
  isRotating,
  isSeeThrough,
}) {
  const detectTheCheckedBox = (label) => {
    console.log("label", label);
    if (label === "Flashing") {
      console.log("flashing", isFlashing, onFlashing());
    }
    if (label === "Rotating") onRotating(label);
    if (label === "See-Trough") onSeeTrough(label);
    if (label === "Square") onChangingToSquare(label);
  };
  return (
    <div className="checkbox">
      <input
        id="checkbox"
        type="checkbox"
        checked={isSquared}
        onChange={() => detectTheCheckedBox(label)}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
}
