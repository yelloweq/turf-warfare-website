import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    return (
        <nav className="navbar">
  
                <li>
                    <Link to="/blog" className="nav-link">blog</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link">patch notes</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link">contact</Link>
                </li>

        </nav>
    )
}

export default Nav
