import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import { BrowserRouter as Router, 
          Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
