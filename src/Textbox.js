import React, { useState } from 'react';

const TwoWayBindingExample = () => {
  
  const [inputText, setInputText] = useState('');

  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      {}
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type here..."
      ></textarea>

      {}
      <p>Current Value:{inputText}</p>
    </div>
  );
};

export default TwoWayBindingExample;
