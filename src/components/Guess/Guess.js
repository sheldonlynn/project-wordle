import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  return <span className={`cell${status ? ` ${status}` : ""}`}>{letter}</span>;
}

function Guess({ value = [] }) {
  return (
    <p className="guess">
      {range(5).map((num, index) => {
        const currLetter = value[index];
        return (
          <Cell
            key={index}
            letter={currLetter?.letter}
            status={currLetter?.status}
          />
        );
      })}
    </p>
  );
}

export default Guess;
