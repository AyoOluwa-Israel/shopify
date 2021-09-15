import React from 'react'
import Loading from './Loading'
import Movie from './Movie'

const MovieList = ({ movies }) => {

  return(
    <div className="card-list">
    {movies && movies.map(movie => (
        <div className="card" key={movie.miid}>
            
            <div className="card--content">
              <h3 className="card--title">Title: {movie.Search.Title}</h3>
              <p><small>RELEASE DATE: {movie.release_date}</small></p>
              <p><small>RATING: {movie.vote_average}</small></p>
              <p className="card--desc">{movie.overview}</p>
            </div>

        </div>
    ))}
  </div>
  )
  
}

export default MovieList
