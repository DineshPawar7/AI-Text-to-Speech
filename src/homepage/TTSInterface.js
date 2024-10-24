// src/components/TTSInterface.js
import React, { useState } from 'react';

const TTSInterface = () => {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h2>Text to Speech</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here"
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default TTSInterface;
