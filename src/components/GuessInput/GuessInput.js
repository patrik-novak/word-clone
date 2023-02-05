import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  };

  const onChange = (event) => setGuess(event.target.value.toUpperCase());

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={1}
        maxLength={5}
        value={guess}
        onChange={onChange}
      />
    </form>
  );
}

export default GuessInput;
