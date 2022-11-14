import React from 'react';
import './App.css';
import Roster from "./components/Roster";
import MoneyForm from "./components/MoneyForm";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <Roster/>
              <MoneyForm/>
          </header>
      </div>
  );
}

export default App;
