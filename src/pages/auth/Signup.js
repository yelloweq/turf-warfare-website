import React, { useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './auth.scss'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase';

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()
    const confirmPasswordRef = useRef()
    const { 
        signup,
        getUsers,
        writeUserData,
    } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Passwords do not match")
        }
        

        try {
            setError('')
            setLoading(true)
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            const username = usernameRef.current.value;
            const users = await getUsers();
            const unavailableUsernames = [];
            if (!users){
                await signup(email, password);
                auth.onAuthStateChanged(user => {
                    if(user != null){
                        writeUserData(user.uid, username, email)
                        history.push("/")
                    }
                })
            }

            users.forEach(function (snap) {
                unavailableUsernames.push(snap.val().username);
            })


            if (!unavailableUsernames.includes(username)){
                
                await signup(email, password);
                auth.onAuthStateChanged(user => {
                    if(user != null){
                        writeUserData(user.uid, username, email)
                        history.push("/")
                    }
                })
                
            } 
            setError("Username unavailable.");

            //await writeUserData(user.uid, username, email);
            
        } catch  {
            setError("Failed to create an account.")
        }
        setLoading(false)
    }
    
    
    return (
        <div className="signup-outer-wrapper">
        <div className="signup-container">
            <h1 className='signup-title'>Sign up</h1>
           
            {error && <h2 className='signup-error'>{error}</h2>}
            <form className="form" id="register_form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" name="username" ref={ usernameRef } required />
                    <label htmlFor="username">Username</label>
                </div> 
                <div className="input-container">
                    <input type="text" name="email" ref={ emailRef } required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-container input-value">
                    <input type="password" name="password" ref={ passwordRef } required />
                    <label htmlFor="password">Password</label>
                </div>
                
                <div className="input-container input-value">
                    <input type="password" name="confirmPassword" ref={ confirmPasswordRef }required />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" className="checkbox" id="check" value="stay" />
                    <label htmlFor="check">Stay signed in </label>
                    
                </div>

                <div className="button-container">
                    <button type="submit" className="submitButton" disabled={loading}><FaArrowRight size={60} color="white" /></button>
                </div>
                    
                    {/* add link to register page and email verification */}
                <div className="bottom-links">
                    <p><Link to="/Login">Already have an account?</Link></p>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Signup
