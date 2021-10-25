import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Header from './components/header';
import Nav from './components/nav';
import Blog from './pages/blogpage/Blog';
import Home from './pages/homepage/Home';

function App() {
  return (
    <Router>

    <Header>
      <Nav />
    </Header>

      <Route path="/blog" component={Blog} />
      <Route path="/" component={Home} />

    </Router>
  );
}

export default App;
