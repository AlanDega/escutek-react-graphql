import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Landing from './views/Landing'
import Home from './views/Home'
import Level1 from './views/Level1';

function App() {
  return (
   <BrowserRouter>
    <Route exact path="/" component={Landing} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/level1" component={Level1} />
   </BrowserRouter>
  );
}

export default App;
