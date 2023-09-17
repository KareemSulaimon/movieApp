import React from 'react'
import { useStateContext } from '../context/StateContext'
import Banner from '../components/Banner';
import { AiOutlineRight}  from 'react-icons/ai'
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';
import { Link  } from 'react-router-dom';



function Home() {
   const {data} = useStateContext()
   const movies = data.results
   
   const displayedMovies = data && movies && movies.length > 0 ? movies.slice(0, 10) : [];


  return (
    <div className='flex flex-col w-[650px]  md:w-[840px] lg:w-[1000px]  xl:w-[1380px] relative items-center border-2'>
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 w-11/12 m-auto'>
        {
          data && movies && movies.length > 0 ? 
          (
            displayedMovies.map((movie) => (
              <Link key={movie.id}  to={`/movie/${movie.title}`}>
                 <MovieCard movieData={movie} />
              </Link>
            ))
            ) 
          :
          (
            <h1 className='w-full m-auto font-black text-4xl'> Movies loading</h1>
          )} 
      </div>
              
         <Footer />
    </div>
  )
  }

export default Home