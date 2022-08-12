import "./Checkbox.css";
import React from "react";

export default function Checkbox({ id, isChecked, label, onChecked }) {
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        style={{ background: `${isChecked ? "blue" : ""} ` }}
        onChange={() => {
          console.log("id", id);
          onChecked(id);
        }}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
}
