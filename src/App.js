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
import About from './pages/about'
import Leaderboard from './pages/leaderboard'
import Contact from './pages/contact';
import Footer from './components/footer'

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
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
        </AuthProvider>
      </Switch>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
