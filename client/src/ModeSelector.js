// src/ModeSelector.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ModeSelector = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleContinue = () => {
    if (isDarkMode) {
      history.push('/dark-mode');
    } else {
      history.push('/light-mode');
    }
  };

  return (
    <div className="mode-selector">
      <h2>Select Mode</h2>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </label>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default ModeSelector;
