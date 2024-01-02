import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ guesses, allowedNumOfGuesses }) {
  return (
    <div className="guess-results">
      {range(allowedNumOfGuesses).map((value, index) => (
        <Guess value={guesses[index]} key={index} />
      ))}
    </div>
  );
}

export default GuessResults;
