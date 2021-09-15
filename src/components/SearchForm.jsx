import React from 'react'

const SearchForm = ( { setQuery, searchMovies, query, movies }) => {


  

  

  return (
    <>
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="input" type="text" name="query"
          placeholder="i.e. Jurassic Park"
          value={query} onChange={(e) => setQuery(e.target.value)}
          />
      <button className="button" type="submit">Search</button>
  </form>

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
  </>
  )
}

export default SearchForm
