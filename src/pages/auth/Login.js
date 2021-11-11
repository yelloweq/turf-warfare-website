import React, { useRef, useState } from 'react'
import { FaFacebook, FaGoogle, FaApple, FaArrowRight } from 'react-icons/fa'
import './auth.scss'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
     

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch (e) {
            setError("Failed to log in " + e)
        }
        setLoading(false)
    }
    return (
        <div className="signup-container">
            <h1>Sign in</h1>
           
            {error && <h2>{error}</h2>}
            <form className="form" id="register_form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" name="email" ref={ emailRef } required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-container input-value">
                    <input type="password" name="password" ref={ passwordRef } required />
                    <label htmlFor="password">Password</label>
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
                    <label htmlFor="check">Stay signed in </label>
                    
                </div>

                <div className="button-container">
                    <button type="submit" className="submitButton" disabled={loading}><FaArrowRight size={30} /></button>
                </div>
                    
                    {/* add link to register page and email verification */}
                <div className="bottom-links">
                    <p><Link to="/signup">Can't sign in?</Link></p>
                    <p><Link to="/signup">Register an account</Link></p>
                </div>
            </form>
        </div>

    )
}

export default Login
