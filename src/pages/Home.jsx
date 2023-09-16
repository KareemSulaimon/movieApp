import React from 'react'
import { useStateContext } from '../context/StateContext'
import Banner from '../components/Banner';
import { AiOutlineRight}  from 'react-icons/ai'
import MovieCard from '../components/MovieCard';
import { Link  } from 'react-router-dom';



function Home() {
   const {data} = useStateContext()
   const movies = data.results
   console.log(movies)

  return (
    <div className='flex flex-col w-[1300px] relative items-center border-2'>
      <div className='w-full'>
          <Banner />
        </div>
            <div className='flex w-11/12 justify-between mt-10'>
                <h3 className='text-[30px] text-black font-bold'>Featured Movie</h3>
                <div className='flex items-center gap-2 text-xl  font-bold text-red-400'>
                <a href="/"> See more</a>
                <AiOutlineRight className='text-[10px]'/>
                </div>
            </div>
      <div className='flex flex-wrap  w-11/12 justify-center xl:justify-between  md:justify-between gap-10 items-center mt-10'>
        {
          data && movies && movies.length > 0 ? 
          (
            movies.map((movie) => (
              <Link key={movie.id}  to={`/movie/${movie.title}`}>
                 <MovieCard  movieData={movie} />
              </Link>
            ))
            ) 
          :
          (
            <h1 className='w-full m-auto font-black text-4xl'> Movies loading</h1>
          )}
            
            </div>
              
    
        </div>
  )
  }

export default Home