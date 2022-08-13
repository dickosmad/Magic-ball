import "./Ball.css";

import React from "react";

export default function Ball({ ballState }) {
  console.log(ballState);
  let classeNames = ["ball"];
  let animation = [];
  let animations = `flashing 1s linear  infinite,see-through 2s linear infinite,rotating 2s linear  infinite`;
  ballState &&
    ballState.forEach(function (item) {
      console.log("item in ball", item);
      console.log(item.isChecked);
      if (item.isChecked) {
        if (item.label === "Square") {
          classeNames.push(item.label.toLowerCase());
        } else {
          animation.push(`${item.label.toLowerCase()} 2s linear  infinite`);
        }
      }
    });

  return (
    <div
      style={{ animation: animation.join(" , ") }}
      className={classeNames.join(" ")}
    >
      <p>henlo</p>
    </div>
  );
}
