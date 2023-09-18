import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const StateContext = ({children}) => {
    // State variables
    const [data, setData] = useState([])
    const [query, setQuery] = useState('');
   const [searchResult, setSearchResult] = useState([]);

    const baseImageUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {

      const options = {

        
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDhlZmQxNDE5MzFmM2MzZTgyNTQyMWYwNzQ1ZTM0ZSIsInN1YiI6IjY1MDFhOGU2ZmZjOWRlMGVlMjA5YjcxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrTwEoumrunzwYlrLosaplZ_zCsHkgj2F7C25Hg_kuM'
        }
      };
   
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.results && responseData.results.length > 0) {
          setData(responseData);
        } else {
          setData("is loading");
        }
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  

  return (
    <Context.Provider
      value={{
        data,
        baseImageUrl,
        setData,
        searchResult,
        setSearchResult,
        handleInputChange,
        query,
        setQuery,
        select
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);