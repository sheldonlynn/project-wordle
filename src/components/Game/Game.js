import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { NUM_OF_GUESSES_ALLOWED as importedNumberOfGuesses } from "../../constants";
import { checkGuess } from "../../game-helpers";

import { sample } from "../../utils";
import { WORDS } from "../../data";

const answer = sample(WORDS);
console.info({ answer });

const NUM_OF_GUESSES_ALLOWED = importedNumberOfGuesses || 6;

function Game() {
  /*
    guesses = [{
      id: randomUUID,
      word: guess
    },]
  */
  const [guesses, setGuesses] = React.useState([]);
  const [gameEndStatus, setGameEndStatus] = React.useState(null);

  function handleCheckGuess(tentativeGuess) {
    const checkGuessResult = checkGuess(tentativeGuess, answer);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameEndStatus("won");
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameEndStatus("lost");
    }

    return checkGuessResult;
  }

  function handleSubmitGuess(tentativeGuess) {
    const guessResult = checkGuess(tentativeGuess, answer);
    const nextGuesses = [...guesses, guessResult];

    if (tentativeGuess.toUpperCase() === answer) {
      setGameEndStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameEndStatus("lost");
    }

    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        allowedNumOfGuesses={NUM_OF_GUESSES_ALLOWED}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameEndStatus={gameEndStatus}
      />
      {gameEndStatus === "won" && <WonBanner guessCount={guesses.length} />}
      {gameEndStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
