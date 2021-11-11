import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'


function Home() {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    function handleLogout(){
        setError('')
        try {
            logout()
            history.push('/login')
        } catch (e) {
            setError('Error while loging out ' + e)
        }
    }

    return (
        <div>
            <h1>hello</h1>
            <strong>Email: </strong>{currentUser.email}
            {error && <h2>{error}</h2>}
            <button onClick={handleLogout}>Log out</button>
        </div>

    )
}

export default Home
