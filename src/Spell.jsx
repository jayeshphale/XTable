import React, { useState, useEffect } from "react";

// Custom dictionary for spell checking
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  useEffect(() => {
    if (!inputText.trim()) {
      setSuggestedText("");
      return;
    }

    const words = inputText.split(/\s+/); // Split by spaces
    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        setSuggestedText(`Did you mean: ${customDictionary[lowerWord]}?`);
        return;
      }
    }
    setSuggestedText(""); // No correction needed
  }, [inputText]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text..."
        rows={5}
        cols={40}
        style={{ padding: "10px", fontSize: "16px", width: "80%" }}
      />
      {suggestedText && (
        <p style={{ color: "red", fontSize: "18px", marginTop: "10px" }}>
          {suggestedText}
        </p>
      )}
    </div>
  );
};

export default SpellCheckApp;
