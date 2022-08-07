import "./Checkboxes.css";

import React from "react";

import Checkbox from "./Checkbox";

const LABELS = ["Flashing", "Rotating", "See-through", "Square"];

export default function Checkboxes() {
  return (
    <div className="checkboxes-container">
      {LABELS.map((label) => (
        <Checkbox key={label} label={label} />
      ))}
    </div>
  );
}
