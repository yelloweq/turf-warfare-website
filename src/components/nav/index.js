import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';
import mylogo from '../../resources/img/logo.png'
import { useAuth } from '../../contexts/AuthContext'

function Nav() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const { currentUser, logout } = useAuth();

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <div className='container-fluid'>
            <a href="/" className="cannon-logo navbar-brand">
                <img src={mylogo} className='logo-image' alt="cannon logo "/>
         </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-between`} id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link">blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/patch-notes" className="nav-link">patch notes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/how-to-play" className="nav-link">How to play</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/leaderboard" className="nav-link">leaderboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">about us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">contact</Link>
                    </li>
                    </ul>
            </div>
        
        {(currentUser) ?
            <div className='form-inline expanded-buttons'>
                <button onClick={logout} className="btn btn-outline-primary ">Log out</button>
                <Link to="/logo192.png" target="_blank" className="btn btn-primary" download>Download</Link>
            </div> : <div className='form-inline justify-content-center m-0'> <Link to="/signup" className="btn btn-outline-primary">Sign up</Link> </div>
              } 
               </div>
            </div>
        </nav>

    )
}

export default Nav
