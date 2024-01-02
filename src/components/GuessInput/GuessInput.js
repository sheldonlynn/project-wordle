import React from "react";

function GuessInput({ handleSubmitGuess, gameEndStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(event) {
    if (gameEndStatus) return;

    const guessString = event.target.value.toUpperCase();

    if (!/^[A-Z]*$/g.test(guessString)) return;

    if (guessString.length > 5) {
      setError("Please enter exactly 5 characters.");
    }
    setTentativeGuess(guessString);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (gameEndStatus) return;

    if (tentativeGuess.length !== 5) {
      setError("Please enter exactly 5 characters.");
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        disabled={!!gameEndStatus}
        onChange={(event) => handleChange(event)}
        style={!!gameEndStatus ? { backgroundColor: "#ddd" } : {}}
        pattern="[A-Za-z]{5}"
      />
      {error && <p>{error}</p>}
    </form>
  );
}

export default GuessInput;
