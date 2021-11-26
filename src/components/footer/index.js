import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <div class="wrapper">
                    <div class="left">
                        <div class="title">Turf Warfare</div>
                        <div class="links">
                            <Link to="/">Home</Link>
                            <Link to="/">Home</Link>
                            <Link to="/">Home</Link>
                            <Link to="/">Home</Link>
                        </div>
                    </div>
                    <div class="right">
                    more info here
                </div>
                </div>
                
                </div>
        </footer>
    )
}

export default Footer
