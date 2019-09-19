import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import articleData from './components/SiteData/articleData';
import Home from './containers/Home'
import Article from './containers/Home/Article';

function App() {
  console.log('articleData',articleData); //added this line of code
  return (
    <div className="App">
    <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/article/:id" component={Article} />
    </Router>
    </div>
  );
}

export default App;
