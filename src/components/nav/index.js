import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    return (
        <ul className="nav col-8 justify-content-center ms-0 me-0">
  
                <li>
                    <Link to="/blog" className="nav-link">blog</Link>
                </li>
                <li>
                    <Link to="/patch-notes" className="nav-link">patch notes</Link>
                </li>
                <li>
                    <Link to="/how-to-play" className="nav-link">How to play</Link>
                </li>
                <li>
                    <Link to="/leaderboard" className="nav-link">leaderboard</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link">about us</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link">contact</Link>
                </li>

        </ul>
    )
}

export default Nav
