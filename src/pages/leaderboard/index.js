import firebase from '../../config/firebase'
import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Leaderboard.scss'

function Leaderboard() {

    const [loading, setLoading] = useState(true)
    const [leaderboard, setLeaderboard] = useState([])
    const { currentUser } = useAuth()

    function sortByWins(a , b){
      if (a.wins < b.wins){
        return 1;
      }
      if (a.wins > b.wins){
        return -1;
      }
      return 0;
    }

    useEffect(() => {
      if (currentUser) {
        const db = firebase.database().ref("users");
        db.on("value", (snapshot) => {
          const users = snapshot.val();
          const ranking = [];
          for  (let id in users){
            ranking.push(users[id])
          }
          ranking.sort(sortByWins)
          setLeaderboard(ranking);
          setLoading(false);
        })
      }
    }, [])

    
    if (loading) {
        return <div className='container-xxl container-height border text-white mb-2 align-items-center justify-content-center'>
            <h1 className='display 2'>No data</h1>
        </div>
    }

  return (
  <>
    <div className='container-xxl container-height border text-white mb-2'>
      {leaderboard ? (leaderboard.map((user) => {
        return (
          <ul key={user.username}>{user.username} <span> {user.wins} </span> </ul>
          
        )
      })) : null }
    </div>
    <div className='container-xxl text-white justify-content-center'>
            <nav aria-label="pages">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="/leaderboard">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="/leaderboard">1</a></li>
                    <li className="page-item"><a className="page-link" href="/leaderboard">2</a></li>
                    <li className="page-item"><a className="page-link" href="/leaderboard">3</a></li>
                    <li className="page-item"><a className="page-link" href="/leaderboard">Next</a></li>
                </ul>
            </nav>
    </div>
  </>
    )
}

export default Leaderboard;
