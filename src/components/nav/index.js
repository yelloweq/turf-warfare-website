import React from 'react'
import { Link } from 'react-router-dom';
import './navStyling.scss';

function index() {
    return (
        <nav className="navbar">
  
                <li>
                    <Link to="/blog" className="link">Blog</Link>
                </li>
                <li>
                    <Link to="/" className="link">LINK2</Link>
                </li>
                <li>
                    <Link to="/" className="link">link3</Link>
                </li>

        </nav>
    )
}

export default index
