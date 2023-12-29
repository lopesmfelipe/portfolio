import React from "react";
import { useState } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h1> {text} </h1>
    </div>
  );
};