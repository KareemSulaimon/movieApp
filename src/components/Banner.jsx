import React from 'react';
import Navbar from './Navbar';
import poster from '../assets/poster.png';
import imob from '../assets/imob.png';
import fruit from '../assets/fruit.png';
import {AiFillPlayCircle}  from 'react-icons/ai';


const Banner = () => {
  
  return (
    <div className=" flex justify-center items-center flex-col w-full relative">
      <Navbar />
      <div className='w-full h-[600px] cursor-pointer overflow-hidden'>
          <img
            className='w-full h-full object-cover'
            src={poster} alt="movie app banner" />
      </div>
      <div  className='flex flex-col gap-4 justify-center absolute top-40  left-40 w-[340px]'>
        <h1 className='text-4xl text-white font-extrabold'>John Wick 3 :<br /> Parabellum</h1>
        <div className='flex items-center gap-4'>
            <span className='flex items-center gap-2 text-lg text-white font-bold'>
              <img src={imob} alt="imdb icon " />
              <h3 className='text-sm text-gray-400 font-normal'>860/100</h3>
            </span>
            <span className='flex items-center gap-2 '>
              <img src={fruit} alt="fruit icon" />
              <h5 className='text-sm text-gray-400 font-normal'>97%</h5>
            </span>
          </div>
          <p className='w-full text-white'>
           John Wick is on the run after killing a member of international assasin's guild and with $14 million price tag on head,
           he is  the target of hit men and women everywhere
          </p>

        <button className='flex items-center w-[150px] gap-2 bg-red-700 px-2 py-2 rounded text-white'>
          <AiFillPlayCircle />
          <h3  className='text-sm text-gray-100 font-normal'>WATCH TRAILER</h3>
          </button>
         
       
      </div>
     
    </div>
  );
};

export default Banner;
