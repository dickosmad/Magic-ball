import "./Checkbox.css";
import React from "react";

export default function Checkbox({ label }) {
  return (
    <div className="checkbox">
      <input id="checkbox" type="checkbox" />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
}
