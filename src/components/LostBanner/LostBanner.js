import React from "react";
import BottomBanner from "../BottomBanner";

function LostBanner({ answer, restartGame }) {
  return (
    <BottomBanner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="restart" onClick={() => restartGame()}>
        Restart
      </button>
    </BottomBanner>
  );
}

export default LostBanner;
