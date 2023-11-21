import React, { useState } from 'react';
import Button from '@mui/material/Button';

const ShowHideText = () => {
 
  const [isTextVisible, setIsTextVisible] = useState(true);

  
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <Button onClick={toggleTextVisibility} variant="contained">
        {isTextVisible ? 'Hide ' : 'Show'}
      </Button>

      {isTextVisible && <p>This is the text that can be shown or hidden.</p>}
    </div>
  );
};

export default ShowHideText;