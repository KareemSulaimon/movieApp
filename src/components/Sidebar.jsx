import React from 'react'
import Logo from '../assets/Logo.svg';
import home from '../assets/home.svg';
import movie_projector from '../assets/movie_projector.png';
import show from '../assets/TV show.svg';
import Calendar from '../assets/Calendar.svg';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="flex flex-col w-[200px] justify-between h-[800px] bg-white border-r border-t-r  border-solid border-red-200  rounded-t-2xl  items-start">
        <div className="flex items-center mt-4 mt-8">
        <img src={Logo} alt="logo icon" />
      </div>
    <Link to={"/"} className='flex items-center gap-2' >
      <img src={home} alt="home icon"/>
      <h1>Home</h1>
    </Link>
    <Link to={"/"} className='flex items-center gap-2' >
      <img src={movie_projector} alt="movie_projector icon"/>
      <h1>Movie</h1>
    </Link>
    <Link to={"/"} className='flex items-center gap-2' >
      <img src={show} alt="ticket icon"/>
      <h1>TV Series</h1>
    </Link>
    <Link to={"/"} className='flex items-center gap-2' >
      <img src={Calendar} alt="Calendar icon"/>
      <h1>upcoming</h1>
    </Link>
  

    <div className='flex flex-col px-4 w-[170px] py-4 bg-pink-20 border  rounded-lg  border-solid border-red-300 '>
        <h2 className='text-black font-normal'>Play movie quizzes and earn free ticket</h2>
        <small  className='text-gray-600 font-normal'>50k people ara playing now</small>
        <button className='px-2 py-1 bg-red-100 border border-solid border-red-200 font-bold  rounded-lg text-red-800  text-xs mb-6'>Start Playing</button>

    </div>
    <Link to={"/"} className='flex items-center gap-2' >
      <img src={Calendar} alt="Calendar icon"/>
      <h1>Log out</h1>
    </Link>
   
</div>
  )
}

export default Sidebar