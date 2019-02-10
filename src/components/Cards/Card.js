import React from "react";

export default function Card(props) {
  console.log("Mani", props);
  return (
    props.cardData !== "undefined" &&
    props.cardData.map((card, index) => (
      <div key={`${props.tab}-${index}`} className="dataCard">
        <button
          className="left"
          onClick={() => props.moveLeft(props.tab, card, props.tabIndex, index)}
        >
          {"<"}
        </button>
        <p>{card}</p>
        <button
          className="right"
          onClick={() =>
            props.moveRight(props.tab, card, props.tabIndex, index)
          }
        >
          {">"}
        </button>
      </div>
    ))
  );
}
