import React, { useRef } from 'react'
import { FaFacebook, FaGoogle, FaApple, FaArrowRight } from 'react-icons/fa'
import './auth.scss'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <div className="signup-container">
            <h1>Sign in</h1>
            <form className="form" id="register_form">
                <div className="input-container">
                    <input type="text" name="email" ref={ emailRef } required />
                    <label for="email">Email</label>
                </div>
                <div className="input-container input-value">
                    <input type="password" name="password" ref={ passwordRef } required />
                    <label for="password">Password</label>
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
                    <button type="submit" className="submitButton" ><FaArrowRight size={30} /></button>
                </div>
                    
                    {/* add link to register page and email verification */}
                <div className="bottom-links">
                    <p><a href="/login">Can't sign in?</a></p>
                    <p><a href="/signup">Create an account</a></p>
                </div>
            </form>
        </div>

    )
}

export default Login
