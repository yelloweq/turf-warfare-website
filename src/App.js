import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './components/header';
import Nav from './components/nav';
import Post from './components/post';
import Blog from './pages/blogpage';
import Home from './pages/homepage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/dashboard';

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
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
        </AuthProvider>
      </Switch>
    </Router>
    </>
  );
}

export default App;
