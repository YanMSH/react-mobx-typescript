import React from 'react';
import './App.css';
import Roster from "./components/Roster";
import MoneyForm from "./components/MoneyForm";
import TeamInfo from './components/TeamInfo';
import { TeamStoreProvider } from './store/TeamStore';
import Athlete from './models/Athlete';

    const lebronJames = new Athlete('Lebron James', 37, 5);
    const stephCurry = new Athlete('Steph Curry', 34, 4);

    const getPlayersFromBackend = (): Athlete[] => {
        return [lebronJames, stephCurry];
    }
function App() {

        const players = getPlayersFromBackend();

  return (
      <div className="App">
          <header className="App-header">
              <TeamStoreProvider players={players}>
                  <TeamInfo/>
              <Roster/>
              <MoneyForm/>
              </TeamStoreProvider>
          </header>
      </div>
  );
}

export default App;
