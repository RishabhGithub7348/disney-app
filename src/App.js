import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail'
import Login from './components/Login';
import {BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
