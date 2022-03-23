import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../config/firebase'
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signupWithGoogle() {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
    }

    function signupWithFacebook() {
        const provider = new FacebookAuthProvider()

        signInWithPopup(auth, provider)
    }

    function signupWithTwitter() {
        const provider = new TwitterAuthProvider()

        signInWithPopup(auth, provider)
    }

    function logout(){
        return auth.signOut()
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)  
            setLoading(false)
        })
        
        return unsubscribe;
    }, [])
    

    const value = {
        currentUser,
        login,
        signup,
        logout,
        signupWithGoogle,
        signupWithTwitter,
        signupWithFacebook
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
