import React from 'react';
import './style.css';

const Poster = ({item}) => {
  return (
    <>
      {item.map((movie, index) => (
        <button className="poster-container" key={index}>
          <img
            src={`https://tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.original_name}
          />
        </button>
      ))}
    </>
  );
}

export default Poster;