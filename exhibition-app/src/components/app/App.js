import React from 'react';
import './App.css';
import ButtonContainer from "../buttonContainer/ButtonContainer.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Images</p>
        < ButtonContainer />
        <p>Text</p>
        < ButtonContainer />
        <p>Sound</p>
        < ButtonContainer />
      </header>
    </div>
  );
}

export default App;
