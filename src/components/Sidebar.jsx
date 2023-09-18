import React from 'react';
import Logo from '../assets/Logo.svg';
import home from '../assets/home.svg';
import movie_projector from '../assets/movie_projector.png';
import show from '../assets/show.svg';
import Calendar from '../assets/Calendar.svg';
import Logout from '../assets/Logout.svg';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="flex flex-col w-full sm:w-[200px] sm:justify-between sm:h-[600px] bg-white border-r border-t-r  border-solid border-red-200 mb-4 rounded-t-2xl gap-4 items-center sm:items-start">
      <Link to={"/"} className='flex items-center' data-testid="logo-link">
        <img src={Logo} alt="logo icon" />
      </Link>
      <div className='flex sm:flex-col sm:h-3/5 justify-between w-4/5'>
        <Link to={"/"} className='flex items-center gap-2' data-testid="home-link">
          <img src={home} alt="home icon"/>
          <h1>Home</h1>
        </Link>
        <Link to={"/"} className='flex items-center gap-2' data-testid="movie-link">
          <img src={movie_projector} alt="movie_projector icon"/>
          <h1>Movie</h1>
        </Link>
        <Link to={"/"} className='flex items-center gap-2' data-testid="tv-series-link">
          <img src={show} alt="ticket icon"/>
          <h1>TV Series</h1>
        </Link>
        <Link to={"/"} className='flex items-center gap-2' data-testid="upcoming-link">
          <img src={Calendar} alt="Calendar icon"/>
          <h1>upcoming</h1>
        </Link>
      </div>
      
     
      <div className='sm:flex flex-col hidden px-4 w-[170px] py-4 bg-pink-20 border  rounded-lg  border-solid border-red-300 '>
        <h2 className='text-black font-normal'>Play movie quizzes and earn free ticket</h2>
        <small className='text-gray-600 font-normal'>50k people ara playing now</small>
        <button className='px-2 py-1 bg-red-100 border border-solid border-red-200 font-bold rounded-lg text-red-800 text-xs mb-6' data-testid="start-playing-button">Start Playing</button>
      </div>
    

      <Link to={"/"} className='flex items-center gap-2' data-testid="logout-link">
        <img src={Logout} alt="Calendar icon"/>
        <h1>Log out</h1>
      </Link>
    </div>
  );
}

export default Sidebar;
