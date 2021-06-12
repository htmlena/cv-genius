import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Generator from './components/Generator/Generator';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Tips from './components/Tips/Tips';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/cv-generator">
              <Generator />
            </Route>
            <Route path="/tips">
              <Tips />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
