import "./Checkbox.css";
import React from "react";

export default function Checkbox({ label, onChangingToSquare }) {
  return (
    <div className="checkbox">
      <input id="checkbox" type="checkbox" checked={onChangingToSquare} />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
}
