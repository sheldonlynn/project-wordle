import React from "react";
import BottomBanner from "../BottomBanner";

function WonBanner({ guessCount, restartGame }) {
  return (
    <BottomBanner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {guessCount} {`guess${guessCount === 1 ? "" : "es"}`}
        </strong>
        .
      </p>
      <button className="restart" onClick={() => restartGame()}>
        Restart
      </button>
    </BottomBanner>
  );
}

export default WonBanner;
