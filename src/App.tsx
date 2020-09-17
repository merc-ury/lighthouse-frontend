import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';

const App: React.FC = () => {
  const handleClick = (): void => {
    alert('Hey!');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>Test</Button>
  );
};

export default App;
