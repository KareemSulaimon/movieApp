import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  // State variables
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const baseImageUrl = 'https://image.tmdb.org/t/p/original';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDhlZmQxNDE5MzFmM2C3ZTgyNTQyMWYwNzQ1ZTM0ZSIsInN1YiI6IjY1MDFhOGU2ZmZjOWRlMGVlMjA5YjcxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrTwEoumrunzwYlrLosaplZ_zCsHkgj2F7C25Hg_kuM'
    }
  };

  const handleInputChange = (event) => {
    const queries = event.target.value;
    setQuery(queries);
  };

  const handleSubmit = () => {
    setData([]);
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b08efd141931f3c3e825421f0745e34e`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (!query) {
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));
    } else if (query && query > 1) {
      handleSubmit();
    }
  }, [query, options, handleSubmit]);

  return (
    <Context.Provider
      value={{
        data,
        baseImageUrl,
        setData,
        handleSubmit,
        handleInputChange,
        query,
        setQuery
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
