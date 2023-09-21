import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

const apiKey = 'b08efd141931f3c3e825421f0745e34e'; // Replace with your actual API key

export const StateContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);
  const baseImageUrl = 'https://image.tmdb.org/t/p/original';

  const handleInputChange = (event) => {
    const queries = event.target.value;
    setQuery(queries);
  };

  const displayMovies = async () => {
    setData([]);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    setData([]);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (movieId) => {
    await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => {
        console.error(error);
        setMovie(null);
      });
  };

  useEffect(() => {
    if (!query) {
      displayMovies();
    } else {
      handleSubmit();
    }
  }, [query]);

  

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
        handleClick,
        movie
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
