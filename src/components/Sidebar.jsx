import React from 'react'
import logo from '../assets/logo.png';

function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white items-center">
        <div className="flex items-center">
        <img src={logo} alt="logo icon" />
      </div>
    <li>Home</li>
    <li>Movie</li>
    <li>Tv series</li>
    <li>upcoming</li>

    <div>
        <small>Play movie quizzes and earn free ticket</small>
        <button>Start Playing</button>
    </div>

    <li>Log out</li>
</div>
  )
}

export default Sidebar