import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import play from '../assets/play.svg';
import listi from '../assets/listi.svg';
import List from '../assets/List.svg';
import ticket from '../assets/ticket.svg';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';

function Movie() {
  const { movie, DisplayError, people, baseImageUrl } = useStateContext();

// const param  = useParams()

//  if (param && param.id) {
//    setParamId(param.id)
//  } else {
//   setParamId(null)
//  }

  const directors = movie && people && people.crew ? people.crew.filter(member => member.known_for_department == 'Directing') : [];
 
  const firstThreeDirectors = people && directors && directors.length > 3 ? directors.slice(0,3) : directors
 

  const writers = movie && people && people.crew ? people.crew.filter(member => member.known_for_department == 'Writing') : [];
  const firstThreeWriters = people && directors && writers.length > 3 ? writers.slice(0,3) : writers
  
  const stars = movie && people && people.cast ? people.cast.filter(member => member.known_for_department == 'Acting') : [];
  const firstThreeStars = people && stars && stars.length > 3 ? stars.slice(0,3) : stars

  const runtime = movie ? movie.runtime / 60 : 0;
  const watchTime = Math.round(runtime);
  const vote_count = Math.ceil(movie && movie.popularity / 1000);

  if (movie && people) {
    return (
      <div className="flex flex-col sm:flex-row w-full items-center sm:items-start sm:gap-2 mt-4 justify-between" data-testid="movie-component">
        <Sidebar data-testid="sidebar" />
        <div className="flex flex-col xs:flex-wrap w-4/5 items-center">
          <div className='flex w-full cursor-pointer gap-10 overflow-hidden rounded-xl relative'>
            <img
              className="w-full h-[500px] object-cover"
              src={movie && baseImageUrl + movie.backdrop_path}
              alt="Movie Poster"
              data-testid="movie-poster"
            />
            <div className='flex flex-col items-center absolute top-28 left-[40%]'>
              <img src={play} alt="play video icon" />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-center mt-2 w-full justify-between'>
            <div className='flex flex-wrap w-full gap-3 items-center'>
              <h1 className='flex flex-wrap text-gray-600 font-black text-xl mb-6'>{movie && movie.original_title}</h1>
              <div className='flex gap-3 items-center font-black text-xl mb-6'>
                <h1 className='w-2 h-2 rounded-full bg-gray-600'></h1>
                <h1 className='text-xl text-gray-600'>
                  {movie && movie.release_date ? movie.release_date.slice(0, 4) : "Not yet released"}
                </h1>
                <h1 className='w-2 h-2 rounded-full bg-gray-600'></h1>
              </div>
              <div className='flex gap-3 items-center font-black text-2xl mb-6'>
                <h1 className='text-xl text-gray-600'>PG-13</h1>
                <h1 className='w-2 h-2 rounded-full bg-gray-600'></h1>
                <h1 className='text-xl text-gray-600'>{watchTime}h {movie &&movie.runtime ? movie.runtime % 2 : ""}m</h1>
              </div>

              {movie && movie.genres ? movie.genres.map(genre => (
                <button key={genre.id} className="px-2 py-1 bg-white border border-solid border-red-200
                  font-bold rounded text-red-800 text-sm mb-6" data-testid="genre-button">
                  {genre.name}
                </button>
              )) : <button className="px-2 py-1 bg-white border border-solid border-red-200
                  font-bold rounded text-red-800 text-sm mb-6" data-testid="genre-button">
                  No genres
                </button>}
            </div>

            <div className='flex items-center'>
              <button className='px-2 py-1 bg-white text-red-800  text-xl mb-6'>
                <BsFillStarFill style={{ fontSize: '30px', fill: "red" }} />
              </button>
              <h3 className='bg-white px-2 py-2 rounded text-red-700 font-black text-xl mb-6'>
                {movie && movie.vote_count ? Math.ceil(movie.vote_count / 1000) : "Non"}
              </h3>
              <h3 className='bg-white px-2 py-2 rounded text-red-700 font-black text-xl mb-6'>{vote_count}K</h3>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row w-full justify-between'>
            <div className='flex flex-col w-full sm:w-3/5 gap-1/5 justify-between items-start'>
              <p className='w-full text-16 text-gray-800'>{movie && movie.overview}</p>
              
                    <div className='flex gap-4 items-center mt-4 mb-4'>
                      <h1 className='text-16 font-bold text-gray-600'>Director :</h1>
                      {
                        people && directors.length > 0 ? (
                        <div className='flex gap-2 flex-wrap'>
                          {Array.from(new Set(firstThreeDirectors.map(director => director.name))).map((directorName, index) => (
                            <h1 key={index} className='text-16 font-bold text-red-600'>{directorName}</h1>
                          ))}
                        </div>
                      ) : (
                        <h1 className='text-16 font-bold text-red-600'>No Director</h1>
                       )
                      }
                    </div>

                    <div className='flex gap-4 items-center mt-4 mb-4'>
                      <h1 className='text-16 font-bold text-gray-600'>Writers :</h1>
                      {
                        people && writers.length > 0 ? (
                        <div className='flex gap-2 flex-wrap'>
                          {Array.from(new Set(firstThreeWriters.map(writer => writer.name))).map((writerName, index) => (
                            <h1 key={index} className='text-16 font-bold text-red-600'>{writerName}</h1>
                          ))}
                        </div>
                      ) : (
                        <h1 className='text-16 font-bold text-red-600'>No Writer</h1>
                       )
                      }
                    </div>

                    <div className='flex gap-4 items-center mt-4 mb-4'>
                      <h1 className='text-16 font-bold text-gray-600'>Stars :</h1>
                      {
                        people && stars.length > 0 ? (
                        <div className='flex gap-2 flex-wrap'>
                          {Array.from(new Set(firstThreeStars.map(star => star.name))).map((starName, index) => (
                            <h1 key={index} className='text-16 font-bold text-red-600'>{starName}</h1>
                          ))}
                        </div>
                      ) : (
                        <h1 className='text-16 font-bold text-red-600'>No Star</h1>
                       )
                      }
                    </div>
    
              
              <div className='flex flex-col mb-2 sm:gap-2 sm:flex-row items-start sm:items-center w-full'>
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
                <img src={List} alt="list icon" />
                <h3>More watch options </h3>
              </button>
              <div className='flex relative items-center h-7 w-full'>
                <button className='flex items-center bg-gray-900 absolute bottom-2 w-full gap-1 justify-center 
                 font-bold  rounded text-gray-300  text-xl'>
                  <img src={listi} alt="list icon" />
                  <h3 className='text-xs'>The Best Movies and Shows in September </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <DisplayError />
    )
  }
}

export default Movie;
