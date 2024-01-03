import React from "react";
import { range } from "../../utils";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(guesses) {
  const statusObj = {};
  guesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ guesses }) {
  let statusByLetter = getStatusByLetter(guesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => {
        return (
          <div className="keyboard-row" key={index}>
            {row.map((letter) => (
              <div className={`letter ${statusByLetter[letter] || ""}`}>
                {letter}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
