import React from 'react'
import './Header.scss';

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
            <div class="header-right">
                
            </div>
        </header>
    )
}

export default Header
