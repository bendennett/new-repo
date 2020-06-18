import React from 'react';

import './App.css';
import Form from "./OnForm.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wunderlist</h1>
        <h2>Wunderlist 2.0 makes it super easy to remember all the little recurring to-dos and surprise to-dos that pop up unexpectedly</h2>
        <p>
          <Form/>
        </p>
       
         
      </header>
    </div>
  );
}

export default App;
