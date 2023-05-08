import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = ({ setLoginUser }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      synthesis.speak(utterance);
    } else {
      console.log('Text to speech is not supported in this browser.');
    }
  };

  return (
    <div className="container">
      <textarea
        className="form-control"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text to speak"
      />
      <button className="btn btn-primary" onClick={handleSpeak}>
        Speak
      </button>
      <button className="btn btn-secondary" onClick={() => setLoginUser({})}>
        Logout
      </button>
    </div>
  );
};

export default Homepage;
