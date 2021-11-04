import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header-container">
            <div className="header-left">
                <a href="/" className="logo">
                    LOGO
                </a>
            </div>
            <div className="divider"></div>
            {props.children}
            <div className="header-right">
                <div className="login-container">
                    <Link to="/login" className="login-button">sign in</Link>
                </div>
                
                <div className="play-container">
                    <Link to="/login" className="play-button">Play Now</Link>
                </div>
                
            </div>
        </header>
    )
}

export default Header
