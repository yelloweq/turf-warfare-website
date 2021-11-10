import React, { useRef, useState } from 'react'
import { FaFacebook, FaGoogle, FaApple, FaArrowRight } from 'react-icons/fa'
import './auth.scss'
import { useAuth } from '../../contexts/AuthContext'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }
    return (
        <div className="signup-container">
            <h1>Sign up</h1>
            {JSON.stringify(currentUser)}
            {error && <h2>{error}</h2>}
            <form className="form" id="register_form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" name="email" ref={ emailRef } required />
                    <label for="email">Email</label>
                </div>
                <div className="input-container input-value">
                    <input type="password" name="password" ref={ passwordRef } required />
                    <label for="password">Password</label>
                </div>
                
                <div className="input-container input-value">
                    <input type="password" name="confirmPassword" ref={ confirmPasswordRef }required />
                    <label for="confirmPassword">Confirm Password</label>
                </div>

                <div className="social">
                    <div className="facebook">
                        <FaFacebook size={26} color="#fff"/>
                    </div>
                    <div className="google">
                        <FaGoogle size={26}/>
                    </div>
                    <div className="apple">
                        <FaApple size={26}/>
                    </div>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" className="checkbox" id="check" value="stay" />
                    <label for="check">Stay signed in </label>
                    
                </div>

                <div className="button-container">
                    <button type="submit" className="submitButton" disabled={loading}><FaArrowRight size={30} /></button>
                </div>
                    
                    {/* add link to register page and email verification */}
                <div className="bottom-links">
                    <p><a href="/login">Can't sign in?</a></p>
                    <p><a href="/login">Already have an account?</a></p>
                </div>
            </form>
        </div>

    )
}

export default Signup
