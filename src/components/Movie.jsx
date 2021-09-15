import React from 'react'

const Movie = ({ item }) => {
  return (
    <div>
      <h1>{item.Search.title}</h1>
      <h1>{item.title}</h1>
    </div>
  )
}

export default Movie
