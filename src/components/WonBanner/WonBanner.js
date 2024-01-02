import React from "react";
import BottomBanner from "../BottomBanner";

function WonBanner({ guessCount }) {
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
    </BottomBanner>
  );
}

export default WonBanner;
