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
            width="100%"
            style={{transitionDelay: `${index}0ms`}} />

            <div className="poster-hover">
              <img
              src={`https://tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.original_name}
              width="100%"
              style={{transitionDelay: `${index}0ms`}} />
            </div>
        </button>
      ))}
    </>
  );
}

export default Poster;