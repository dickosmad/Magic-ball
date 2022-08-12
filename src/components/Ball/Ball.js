import "./Ball.css";

import React from "react";

export default function Ball({ ballState }) {
  console.log(ballState);
  let classeNames = ["ball"];
  ballState?.forEach(function (item) {
    console.log(item.isChecked);
    if (item.isChecked) classeNames.push(item.label.toLowerCase());
  });

  return (
    <div className={classeNames.join(" ")}>
      <p>henlo</p>
    </div>
  );
}
