import React, { useState } from "react";

const XDictionary = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const dictionary = {
    React: "A JavaScript library for building user interfaces.",
    Component: "A reusable building block in React.",
  };

  const handleSearch = () => {
    if (!word.trim()) {
      setDefinition("Word not found in the dictionary.");
      return;
    }

    const lowerCaseWord = word.trim().toLowerCase();
    const foundWord = Object.keys(dictionary).find(
      (key) => key.toLowerCase() === lowerCaseWord
    );

    if (foundWord) {
      setDefinition(dictionary[foundWord]);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word..."
      />
      <button onClick={handleSearch}>Search</button>
      <p>Definition:</p>
      <p>{definition}</p>
    </div>
  );
};

export default XDictionary;
