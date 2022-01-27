import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <header className="d-flex align-items-center justify-content-center justify-content-md-between py-3 text-white">
            <div className='d-flex col-1 justify-content-center'>
                <a href="/" className="logo">Logo</a>
            </div>
            

            {props.children}

            <div className='me-5'>
                <Link to="/login" className="btn btn-outline-primary me-5">sign in</Link>

                <Link to="/login" className="btn btn-primary">Play Now</Link>
            </div>
            
                
                
           
        </header>
    )
}

export default Header
