import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Post from './components/post/Post';
import Blog from './pages/blogpage/Blog';
import Home from './pages/homepage/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
    <Router>
      <Header>
        <Nav />
      </Header> 
      <Switch>
        <AuthProvider>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
       
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={Post} />
        <Route exact path="/" component={Home} />
        </AuthProvider>
      </Switch>
    </Router>
    </>
  );
}

export default App;
