import React from 'react';
import Navbar from './Navbar';
import poster from '../assets/poster.png';
import imob from '../assets/imob.png';
import fruit from '../assets/fruit.png';
import { AiFillPlayCircle } from 'react-icons/ai';

const Banner = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full relative" data-testid="banner">
      <Navbar data-testid="navbar" />
      <div className="w-full h-[650px] md:h-[600px] lg:h-[500px] xl:h-[500px] cursor-pointer overflow-hidden" data-testid="banner-image">
        <img className="w-full h-full object-cover" src={poster} alt="movie app banner" />
      </div>
      <div className="flex flex-col gap-4 justify-center absolute top-64 sm:top-40 left-40 w-[340px]" data-testid="banner-content">
        <h1 className="text-4xl text-white font-extrabold">John Wick 3 :<br /> Parabellum</h1>
        <div className="flex items-center gap-4" data-testid="ratings">
          <span className="flex items-center gap-2 text-lg text-white font-bold">
            <img src={imob} alt="imdb icon" />
            <h3 className="text-sm text-gray-400 font-normal">860/100</h3>
          </span>
          <span className="flex items-center gap-2">
            <img src={fruit} alt="fruit icon" />
            <h5 className="text-sm text-gray-400 font-normal">97%</h5>
          </span>
        </div>
        <p className="w-full text-white" data-testid="movie-description">
          John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
        </p>
        <button className="flex items-center w-[150px] gap-2 bg-red-700 px-2 py-2 rounded text-white" data-testid="watch-trailer-button">
          <AiFillPlayCircle />
          <h3 className="text-sm text-gray-100 font-normal">WATCH TRAILER</h3>
        </button>
      </div>
    </div>
  );
};

export default Banner;
