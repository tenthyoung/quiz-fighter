import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Appbar from './components/Appbar/Appbar';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Button variant="contained" color="primary">
        Hello World
    </Button>
    </div>
  );
}

export default App;
