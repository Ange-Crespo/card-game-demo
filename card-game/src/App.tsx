import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderComponent } from './component'
import { DeckBuilder, Game, Home } from './pages';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <HeaderComponent/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/deckbuilder' element={<DeckBuilder/>}/>
          <Route path='/play' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App