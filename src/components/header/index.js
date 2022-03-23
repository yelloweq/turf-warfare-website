import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import mylogo from '../../resources/img/logo.png'
import { useAuth } from '../../contexts/AuthContext'



function Header(props) {
    const { currentUser, logout } = useAuth()
    
    return (
        <header className="container-fluid d-flex flex-nowrap align-items-center justify-content-center  p-0 text-white">
            <div className='d-flex align-items-center justify-content-center'>
                <a href="/" className="logo ms-2">
                    <img src={mylogo} alt="cannon logo"></img>
                </a>
            </div>

            {props.children}

            {currentUser ?
            <div className='col-2 d-flex justify-content-center'>
                <button onClick={logout} className="btn btn-outline-primary">Log out</button>
                <Link to="/logo192.png" target="_blank" className="btn btn-primary ms-5" download>Download</Link>
            </div> : <div className='col-2 d-flex justify-content-center m-0'> <Link to="/signup" className="btn btn-outline-primary">Sign up</Link> </div>
                }
                 
        </header>
    )
}

export default Header
