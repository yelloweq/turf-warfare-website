import React from 'react'
import './headerStyling.scss';

function index(props) {
    return (
        <header className="header">
            <div class="logo">
                LOGO
            </div>
            {props.children}
        </header>
    )
}

export default index
