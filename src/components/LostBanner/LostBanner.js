import React from "react";
import BottomBanner from "../BottomBanner";

function LostBanner({ answer }) {
  return (
    <BottomBanner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </BottomBanner>
  );
}

export default LostBanner;
