import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const StateContext = ({children}) => {
    // State variables
    const [data, setData] = useState([])

    const baseImageUrl = "https://image.tmdb.org/t/p/original";


    useEffect(() => {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDhlZmQxNDE5MzFmM2MzZTgyNTQyMWYwNzQ1ZTM0ZSIsInN1YiI6IjY1MDFhOGU2ZmZjOWRlMGVlMjA5YjcxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrTwEoumrunzwYlrLosaplZ_zCsHkgj2F7C25Hg_kuM'
        }
      };
    //     fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    //       .then((response) => response.json())
    //       .then((data) => setData(data));
    // }, []

    // )
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
          .then((response) => response.json())
          .then((data) => {
            if( data && data.results &&  data.results.length > 0) {
              setData(data)
            } else {
              setData("is loading")
            }
          });
      }, []);
    
    
    return (
        <Context.Provider
        value={{
            data,
            baseImageUrl,
             setData
        }}
        >
      {children}
        </Context.Provider>
    )
    
}
export const useStateContext = () => useContext(Context)