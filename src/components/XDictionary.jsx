import React, { useState } from "react";
import "../App.css";

const XDictionary = () => {
  // Predefined dictionary
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  // State variables
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  // Function to handle search
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setDefinition("Type a word to search.");
      return;
    }

    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    setDefinition(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display definition only when a search is performed */}
      {definition && (
        <div>
          {definition !== "Type a word to search." && definition !== "Word not found in the dictionary." ? (
            <>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </>
          ) : (
            <p>{definition}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default XDictionary;
