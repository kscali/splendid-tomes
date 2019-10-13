import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SearchResults from './components/Books/SearchResults';
import Book from './components/Books/Book';

import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/:id" component={ Book } />
      <Route exact path="/results" component={ SearchResults } />
      <Route exact path="/" component={ Home } />
    </div>
  );
}

export default App;
