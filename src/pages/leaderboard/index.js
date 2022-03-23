// import { onValue, getDatabase, query, ref, orderByChild, orderBy } from 'firebase/database'
import React from 'react'
// import { useAuth } from '../../contexts/AuthContext'
import './Leaderboard.scss'

function Leaderboard() {

    // const [loading, setLoading] = useState(true)
    // const [leaderboard, setLeaderboard] = useState([])
    // const { currentUser } = useAuth()

    // useEffect(() => {
    //   if (currentUser) {
    //     const db = getDatabase();
    //     const mostWins = query(ref(db, 'users/'));
    //     onValue(mostWins, (snapshot) => {
    //       console.log(snapshot.val())
    //       const data = snapshot.val()
    //       // console.log(data);
    //     })
    //   }
    // }, [])

    
    // if (loading) {
    //     return <div className='container-xxl container-height border text-white mb-2 align-items-center justify-content-center'>
    //         <h1 className='display 2'>No data</h1>
    //     </div>
    // }

  return (
  <>
    <div className='container-xxl container-height border text-white mb-2'>
      
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
