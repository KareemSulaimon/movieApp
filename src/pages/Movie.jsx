import React from 'react';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

function Movie() {
  const { data, baseImageUrl } = useStateContext();
  const movies = data.results;
  const { title } = useParams();

  let movieDetails = null;

  if (movies && movies.length > 0) {
    movieDetails = movies.find(movie => movie.title === title);
  }

  if (!movieDetails) {
    // You can render a loading state or any appropriate fallback content here
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col xs:flex-wrap gap-20 w-full items-start sm:items-center p-6 sm:p-20 justify-between'>
      <div className='flex w-4/5 h-[500px] flex-col sm:items-start cursor-pointer gap-10 overflow-hidden rounded-t'>
        <img className=' w-full h-full object-cover' src={baseImageUrl + movieDetails.poster_path} alt="Movie Poster" />
      </div>
      <div className='flex gap-2 items-center'>
      <h1 className='text-black font-black text-2xl mb-6'>{movieDetails.title}</h1>
      <h3 className='text-black font-black text-2xl mb-6'>{movieDetails.release_date.slice(0, 4)}</h3>
      <h3 className='bg-white px-2 py-2 rounded text-red-700 font-black text-2xl mb-6'>Action</h3>
      <h3 className='bg-white px-2 py-2 rounded text-red-700 font-black text-2xl mb-6'>Drama</h3>
      <h3 className='bg-white px-2 py-2 rounded text-red-700 font-black text-2xl mb-6'>{movieDetails.popularity}</h3>
      </div>
      <p className='w-full text-gray-6000'>{movieDetails.overview}</p>
    </div>
  );
}

export default Movie;
