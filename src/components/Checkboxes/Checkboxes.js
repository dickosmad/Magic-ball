import "./Checkboxes.css";

import React from "react";

import Checkbox from "./Checkbox";

//const LABELS = ["Flashing", "Rotating", "See-through", "Square"];

export default function Checkboxes({ checkboxes, onChecked }) {
  console.log("Onflashing", checkboxes);
  return (
    <div className="checkboxes-container">
      {checkboxes.map(({ id, label, isChecked }) => {
        console.log("Checked", id, label, isChecked);
        return (
          <Checkbox
            key={id}
            label={label}
            isChecked={isChecked}
            onChecked={onChecked}
            id={id}
          />
        );
      })}
    </div>
  );
}
