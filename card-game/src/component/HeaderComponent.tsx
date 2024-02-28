import * as React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"


export const HeaderComponent = () => (
    <header className="App-header">
      <h1>Octopouces TCG</h1>
      <ul>
      <nav>
        <li><Link to="">Accueil</Link></li>
        <li><Link to="/deckbuilder">Deck builder</Link></li>
        <li><Link to="/play">Jouer</Link></li>
      </nav>
      </ul>
  </header>
);