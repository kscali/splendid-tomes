import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SearchResults from './components/Books/SearchResults';
import Book from './components/Books/Book';
import { Author } from './components/Author/Author';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/results" component={ SearchResults } />
        <Route exact path="/author/:authorId" component={ Author } />
        <Route exact path="/:id" component={ Book } />
        <Route exact path="/" component={ Home } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
