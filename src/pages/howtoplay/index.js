import React from 'react'
import './howtoplay.scss'
import pic from'../../resources/img/Capture.png'
import pic2 from'../../resources/img/Capture3.png'
import pic5 from'../../resources/img/Capture5.png'

function Howtoplay() {
  return (
    <div className= "howtoplay">
	<div className= "container">

	<h1> How To Play </h1>

	<p>Trench Warfare is a turn-based multiplayer game in which there are two players.<br/> Each player has a respective base.
	The goal of the game is to defeat your enemies base while preserving your own.<br/> 
	Canons are used to attack the opposing base.
	Stack your money by attacking the enemy base.<br/> 
	Upgrade your base from the upgrade box.
	The first base health to diminish 
	is the loser.
	</p>
	<h1>Controls</h1>
	<p>
	WASD to walk around<br/>
	E to interact with the canon<br/>
	Left and Right arrows for horizontal canon control<br/>
	Up and Down arrows for vertical canon control<br/>
	F to fire the canon
	</p>
	
	 <div className="row d-flex justify-content-center mb-2">	
	<img className="gameplay-image" src={pic} alt="Logo" />	
	<img className="gameplay-image" src={pic2} alt="Logo" />
	<img className="gameplay-image" src={pic5} alt="Logo" />
	</div>
	</div>
	<br/>
	</div>
  )
}

export default Howtoplay
