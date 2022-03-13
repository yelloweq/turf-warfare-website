import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import mylogo from '../../resources/img/logo.png'
import { useAuth } from '../../contexts/AuthContext'



function Header(props) {
    const { currentUser, logout } = useAuth()
    
    return (
        <header className="container d-flex align-items-center justify-content-center justify-content-between m-0 text-white">
            <div className='d-flex align-items-center justify-content-center'>
                <a href="/" className="logo ms-2">
                    <img src={mylogo} width={100} alt="cannon logo"></img>
                </a>
            </div>
            

            {props.children}

            <div className='col-2 d-flex justify-content-between m-0'>
                {currentUser ?
                <button onClick={logout} className="btn btn-outline-primary">Log out</button>
                : <></>
                }
                 {currentUser ? 
                <Link to="/logo192.png" target="_blank" className="btn btn-primary" download>Download</Link>
                : <Link to="/signup" className="btn btn-outline-primary">Sign up</Link>
                 }
                 
                
            </div>
        </header>
    )
}

export default Header
