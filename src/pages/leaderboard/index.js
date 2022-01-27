import React, {useState, useEffect} from 'react';
import './Leaderboard.scss';

function Leaderboard() {

    const [loading, setLoading] = useState(true);
    const [leaderboard, setLeaderboard] = useState([]);

    
    if (loading) {
        return <div className='container-xxl container-height border text-white mb-2 align-items-center justify-content-center'>
            <h1 className='display 2'>No data</h1>
        </div>
    }

  return (
  <>
    <div className='container-xxl container-height border text-white mb-2'>
      
      </div>
    <div className='container-xxl text-white justify-content-center'>
            <nav aria-label="pages">
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href="/leaderboard">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="/leaderboard">1</a></li>
                    <li class="page-item"><a class="page-link" href="/leaderboard">2</a></li>
                    <li class="page-item"><a class="page-link" href="/leaderboard">3</a></li>
                    <li class="page-item"><a class="page-link" href="/leaderboard">Next</a></li>
                </ul>
            </nav>
    </div>
  </>
    )
}

export default Leaderboard;
