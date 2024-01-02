import React from "react";

function BottomBanner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default BottomBanner;
