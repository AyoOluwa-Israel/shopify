import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'





const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchMovie, setSearchMovie] = useState('a');
  const [movies, setMovies] = useState([]);

  const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=d710b06d'

  const fetchMovie = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchMovie}`)
      const data = await response.json();
      console.log(data);
      setMovies(data)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie()
  }, [searchMovie])


  return <AppContext.Provider value=
  {{
    loading,setSearchMovie,movies
  }}

  >{children}
  
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
