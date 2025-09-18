import React from "react";
import { ReactTyped } from "react-typed";

function TypeText({ string, isOff }) {
  return (
    <ReactTyped
      strings={[`${string}`]}
      typeSpeed={60}
      backSpeed={0}
      loop={false}
      showCursor={isOff}
      cursorChar="_"
    />
  );
}

export default TypeText;
