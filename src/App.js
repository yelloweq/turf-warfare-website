import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Blog from './pages/blogpage/Blog';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>

    <Header>
      <Nav />
    </Header>

      <Route path="/login" component={Login} />
      <Route path="/blog" component={Blog} />
      <Route exact path="/" component={Home} />

    </Router>
  );
}

export default App;
