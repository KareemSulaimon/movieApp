import React, { createContext, useContext, useEffect, useState } from 'react';
import loader from '../assets/loader.gif';


const Context = createContext();

export const StateContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);
  const [people, setPeople] = useState([]);
  const baseImageUrl = 'https://image.tmdb.org/t/p/original';

  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

  const handleInputChange = (event) => {
    const queries = event.target.value;
    setQuery(queries);
  };

  const displayMovies = async () => {
    setData([]);
    try {
      const response = await fetch(`${apiUrl}/trending/all/day?api_key=${apiKey}`);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  const handleSubmit = async () => {
    setData([]);
    try {
      const response = await fetch(`${apiUrl}/search/movie?query=${query}&api_key=${apiKey}`);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  const handleClick = async (movieId) => {
    try {
      const response = await fetch(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`);
      const responseData = await response.json();
      setMovie(responseData);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setMovie(null);
    }
  };

  const getPeople = async (movieId) => {
    try {
      const response = await fetch(`${apiUrl}/movie/${movieId}/credits?api_key=${apiKey}`);
      const responseData = await response.json();
      setPeople(responseData); 
    } catch (error) {
      console.error('Error fetching movie credits:', error);
    }
  };

  const callTwoFunctions = (movieId) => {
    handleClick(movieId);
    getPeople(movieId);
  };

  useEffect(() => {
    if (!query) {
      displayMovies();
    } else {
      handleSubmit();
    }
  }, [query]);

  function DisplayError() {
    return (
      <div className="m-auto" data-testid="loader-image">
        <img className="w-full h-full object-cover" src={loader} alt="loader gif" />
        <h1  className="text-xl text-black font-extrabold">Make Sure You Are Connected to the Internet</h1>
      </div>
    );
  }

  return (
    <Context.Provider
      value={{
        data,
        baseImageUrl,
        setData,
        handleSubmit,
        handleInputChange,
        query,
        setQuery,
        DisplayError,
        movie,
        people,
        callTwoFunctions
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
