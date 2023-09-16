import React from 'react'
import { useStateContext } from '../context/StateContext'
import imob from '../assets/imob.png'
import fruit from '../assets/fruit.png'


function MovieCard({movieData:{original_title,release_date,poster_path,vote_average}}) {
  const {baseImageUrl} = useStateContext();
  const movieBanner = baseImageUrl + poster_path;

  return (
    <div className='flex flex-col w-64'>
        <div className='w-full cursor-pointer overflow-hidden relative'>
            <img
            className='w-full h-full object-cover'
            src={movieBanner} alt="movie banner"/>
       </div>
        <div className='flex flex-col gap-3 pl-4 pt-4 pb-10 h-56'>
          <h3  className='text-sm text-gray-400 font-normal'>USA, {release_date.slice(0,4)}</h3>
            <h1 className='font-black text-2xl'>{original_title}</h1>
            <div  className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-lg text-white font-bold'>
                <img src={imob}  alt="imdb database logo" />
                  <h3 className='text-sm text-gray-400 font-normal'>{vote_average * 10} / 100</h3>
                </span>
                <span className='flex items-center gap-2 '>
                  <img src={fruit} alt="fruit icon" />
                  <h5 className='text-sm text-gray-400 font-normal'>97%</h5>
                </span>
            </div>
                <h5 className='text-sm text-gray-400 font-normal'>Animation, action, adventure</h5>
            

        </div>
    </div>
          
  )
}

export default MovieCard