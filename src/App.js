import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={ Home } />
    </div>
  );
}

export default App;
