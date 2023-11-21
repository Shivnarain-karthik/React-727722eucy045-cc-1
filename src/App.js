import React, { useState } from 'react';
import './App.css'; 

function ToggleText() {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Text</button>
      <p className={isHidden ? 'hidden' : ''}>This is the hidden text that will be shown or hidden.</p>
    </div>
  );
}

export default ToggleText;
