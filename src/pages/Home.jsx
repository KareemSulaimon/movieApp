import React from 'react';
import { useStateContext } from '../context/StateContext';
import Banner from '../components/Banner';
import { AiOutlineRight } from 'react-icons/ai';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  const { data, callTwoFunctions, DisplayError } = useStateContext(); // Updated the function name

  // Extracting movies from the data
  const movies = data?.results;
  const displayedMovies = data && movies && movies.length > 0 ? movies.slice(0, 10) : [];

  if (data && movies && movies.length > 0) {
    return (
      <div className='flex flex-col w-[650px] md:w-[840px] lg:w-[1000px] xl:w-[1340px] relative items-center border-2' data-testid="home-container">
        <div className='w-full' data-testid="banner-container">
          <Banner />
        </div>

        <div className='flex w-11/12 justify-between mt-10' data-testid="featured-movie-container">
          <h3 className='text-[30px] text-black font-bold'>Featured Movie</h3>
          <div className='flex items-center gap-2 text-xl font-bold text-red-400'>
            <Link to="/" data-testid="see-more-link">See more</Link>
            <AiOutlineRight className='text-[10px]' data-testid="right-icon" />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 justify-center items-center w-11/12 m-auto' data-testid="movies-grid">
          {displayedMovies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`} onClick={() => callTwoFunctions(movie.id)} className='flex justify-center items-center' data-testid={`movie-link-${movie.id}`}>
              <MovieCard movieData={movie} />
            </Link>
          ))}
        </div>

        <Footer data-testid="footer" />
      </div>
    );
  } else {
    return <DisplayError />;
  }
}

export default Home;
