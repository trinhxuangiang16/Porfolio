import React from "react";

export default function DivideLetter({ text }) {
  return (
    <>
      {text.split("").map((word, index) => (
        <span key={index} className="letter">
          {word}
        </span>
      ))}
    </>
  );
}
