import React from 'react';
import {BsFillStarFill} from 'react-icons/bs';
import {AiOutlineDown} from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import play from '../assets/play.svg';
import listi from '../assets/listi.svg';
import ticket from '../assets/ticket.svg';
import movie from '../assets/movie.svg';
import show from '../assets/show.svg';
import Sidebar from '../components/Sidebar';

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
    return  <div>Loading...</div>;
    
  }
  
  const popularity = movieDetails.popularity / 1000
  const roundedNumber = Math.ceil(popularity)
  return (
    <div className="flex flex-col sm:flex-row w-full items-center sm:gap-2 mt-4 justify-between" data-testid="movie-component">
    <Sidebar data-testid="sidebar" />
    <div className="flex flex-col xs:flex-wrap w-4/5 items-center">
          <div className='flex w-full cursor-pointer gap-10 overflow-hidden rounded-xl relative'>
              <img
              className="w-full h-[500px] object-cover"
              src={baseImageUrl + movieDetails.backdrop_path}
              alt="Movie Poster"
              data-testid="movie-poster"
            />
        <div className='flex flex-col items-center absolute top-28 left-[40%]'>
            <img src={play} alt="play video icon"/>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-center mt-2 w-full justify-between'>
          <div className='flex flex-wrap w-full gap-3  items-center'>
          <h1 className='flex flex-wrap text-gray-600 font-black text-xl mb-6'>{movieDetails.title}</h1>
          <div className='flex gap-3 items-center font-black text-xl mb-6'> 
            <h1 className=' w-2 h-2 rounded-full bg-gray-600'></h1>
              <h1 className='text-xl text-gray-600'>{movieDetails.release_date.slice(0, 4)}</h1>
              <h1 className=' w-2 h-2 rounded-full bg-gray-600'></h1>
            </div>
          <div className='flex gap-3 items-center font-black text-2xl mb-6'> 
              <h1 className='text-xl text-gray-600'>PG 13</h1>
              <h1 className=' w-2 h-2 rounded-full bg-gray-600'></h1>
              <h1 className='text-xl text-gray-600'>2H 10m</h1>
            </div>
            
          <button className="px-2 py-1 bg-white border border-solid border-red-200 font-bold rounded text-red-800 text-xl mb-6" data-testid="genre-button">
          {movieDetails.genre_ids[0]}
        </button>
        <button className="px-2 py-1 bg-white border border-solid border-red-200 font-bold rounded text-red-800 text-xl mb-6" data-testid="genre-button">
          Drama
        </button>
          </div>

          <div className='flex items-center'>
            <button className='px-2 py-1 bg-white text-red-800  text-xl mb-6'>
              <BsFillStarFill style={{ fontSize: '30px',fill: "red" }} />
              </button>
            <h3 className='bg-white px-2 py-2 rounded text-red-700 font-black text-2xl mb-6'>{roundedNumber}K</h3>
          </div>
        </div>


        <div className='flex  flex-col sm:flex-row w-full justify-between'>
        <div className='flex flex-col w-full sm:w-3/5 gap-1/5 justify-between items-start'>
              {/* <div className='flex flex-col w-3/5 justify-between items-start'> */}
                  <p className='w-full text-16 text-gray-800'>{movieDetails.overview}</p>     
                  <div className='flex gap-4 items-center mt-4 mb-4'>  
                      <h1 className='text-16 font-bold text-gray-600'>Director :</h1>         
                      <h1 className='text-16 font-bold text-red-600'>Joseph Kosinki</h1>         
                  </div>
                  <div className='flex gap-4 items-center mb-4'>  
                      <h1 className='text-16 font-bold text-gray-600'>Writers :</h1>         
                      <h1 className='text-16 font-bold text-red-600'>Jim Cash, Jack Epps Jr,Peter Craig</h1>         
                    </div>
                  <div className='flex gap-4 items-center mb-4'>  
                      <h1 className='text-16 font-bold text-gray-600'>Stars :</h1>         
                      <h1 className='text-16 font-bold text-red-600'>Tom Cruise, Jennifer Epps Jr,Milles Teller</h1>         
                    </div>
                    <div className='flex flex-col sm:flex-row ems-start itsm:items-center w-full'>
                    <button className="px-3 py-3 bg-red-800 font-bold text-white rounded text-red-800 text-xl" data-testid="top-rated-button">
                          Top rated movie #65
                      </button>
                    <button className="flex items-center justify-between px-3 w-full sm:w-[400px] py-3 bg-white border border-solid border-red-200 font-bold rounded text-gray-600 text-xl" data-testid="awards-button">
                            <h3>Awards 9 nomination</h3>
                            <AiOutlineDown data-testid="down-icon" />
                    </button>

              </div>
          </div>
        
          <div className='flex flex-col w-full sm:w-[300px] gap-4 sm:gap-2 items-start sm:items-center'>
              <button className='flex items-center bg-red-800 w-full gap-1 justify-center px-3 py-3 e border border-solid border-red-200 font-bold  rounded text-white text-xl'>
                <img src={ticket} alt="ticket icon" />     
                <h3>See Showtimes </h3> 
            </button>
              <button className='flex items-center w-full gap-1 justify-center px-3 py-3 bg-white border border-solid border-red-200 font-bold  rounded text-gray-600  text-xl'>
              <img src={listi} alt="list icon" />     
                <h3>More watch options </h3> 
            </button>
            <div className='flex relative items-center w-full'>
            <img src={movie} alt="movie image" className='w-full '/>     
            <button className='flex items-center absolute bottom-2 w-full gap-1 justify-center  font-bold  rounded text-gray-300  text-xl'>
              <img src={show} alt="list icon" />     
                <h3>The Best Movies and Shows in September </h3> 
            </button>
        </div>
        </div>
        </div>
     </div>
    </div>
  );
}

export default Movie;
