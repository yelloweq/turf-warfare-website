import React, { useState, useEffect, useContext } from 'react';
import firebase, { auth } from '../config/firebase';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signupWithGoogle() {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider);
    }

    function signupWithFacebook() {
        const provider = new FacebookAuthProvider()

        signInWithPopup(auth, provider);
    }

    function signupWithTwitter() {
        const provider = new TwitterAuthProvider()

        signInWithPopup(auth, provider);
    }

    function logout(){
        return auth.signOut();
    }

    function writeUserData(userId, uname, userEmail) {
        firebase.database().ref('users/' + userId).set({
            email: userEmail,
            username: uname,
            wins: 0,
          });
      }

    function getUsers(){
        return firebase.database().ref().child("users").get();
    }

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
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
        signupWithFacebook,
        writeUserData,
        getUsers,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
