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
        const db = firebase.database().ref("users");
        db.on("value", (snapshot) => {
          const users = snapshot.val();
          const ranking = [];
          for  (let id in users){
            if(currentUser && currentUser.email === users[id].email){
              users[id].owner = true;
            }
            ranking.push(users[id])
          }
          ranking.sort(sortByWins);
          setLeaderboard(ranking);
          setLoading(false);
        })
    }, [currentUser])

    
    if (loading) {
        return <div className='container-xxl container-height border text-white mb-2 align-items-center justify-content-center'>
            <h1 className='display 2'>Waiting for the server to return player stats.</h1>
        </div>
    }

  return (
  <>
    <div className='leaderboard'><br/>
    <div className='container-xxl container-height border text-white mb-2'>
      <div className='d-flex justify-content-center align-items-center text-center columns'>
      <div className='col-3 justify-content-center'>RANK</div>
      <div className='col-6 justify-content-center'>USERNAME</div>
      <div className='col-3 justify-content-center'>WINS</div>
      </div>
      {leaderboard ? (leaderboard.map((user) => {
        return (
          <div key={user.username} className='d-flex justify-content-center align-items-center'> 
          {(user.wins > 11) ? (
            <>
            <div className={`rank col-3 godlike ${user.owner ? "owner" : ""}`}> {leaderboard.indexOf(user) + 1}#</div>
            <div className={`col-6 godlike ${user.owner ? "owner" : ""}`}>{user.username}</div>
            <div className={`wins col-3 godlike ${user.owner ? "owner" : ""}`}> {user.wins} </div>
            </>
          ) : (
            <>
            <div className={`rank col-3 ${user.owner ? "owner" : ""}`}> {leaderboard.indexOf(user) + 1}#</div>
            <div className={`col-6 ${user.owner ? "owner" : ""}`}>{user.username}</div>
            <div className={`wins col-3 ${user.owner ? "owner" : ""}`}> {user.wins} </div>
            </>
            
          )}

          
          </div>

          
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
	</div>
  </>
    )
}

export default Leaderboard;
