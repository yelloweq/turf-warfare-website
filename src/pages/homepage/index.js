import React from 'react'
import background from '../../resources/img/home.jpg'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {
    const { currentUser } = useAuth()

    return (
        <div className="home">
            <section className='landing'>
            <div class="right">
                Trench Based Warfare
                <p>
                Trench Warfare is an award winning turn based strategy game about building a base and going into combat.
                With thousands of players, it is one of <strong> the most thrilling strategy game </strong>.
                <br />
                <br />
                You play as one of 2 soldiers initially armed with your base and only a cannon, you'll need to focus on your aim and power in order
                to defeat your enemy! Hit your opponent to knock them off their base or wear down their health until they fall! Earn points by making tactical shots in order to <strong> unlock new weapons and upgrade your base!</strong>
                <br />
                <br />
                Cannons, Guns, Grenades. Trench Warfare has it all!
                </p>
                <div className="play-wrapper">
                {currentUser ? 
                <Link className="play-button" to="/play-now">Play for free</Link> : <Link className="play" to="/register">Play Now</Link> }
                </div>
            </div>
            </section>
        </div>
    )
}
