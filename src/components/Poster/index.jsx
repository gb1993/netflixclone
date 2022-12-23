import React, { useState } from 'react';
import { getTraillerId } from '../../helpers/tmdb';
import './style.css';

const Poster = ({item}) => {
  const [link, setLink] = useState();
  const [noLink, setNolink] = useState(false);

  const handleTrailer = async (id) => {
    const youtubeTrailerId = await getTraillerId(id)
    if (youtubeTrailerId === false) {
      setNolink(true);
    } else {
      const youtubeLink = `https://www.youtube.com/watch?v=${youtubeTrailerId}`;
      setLink(youtubeLink);
    }
  }

  return (
    <>
      {item.map((movie, index) => (
        <button className="poster-container" key={index} onClick={ () => handleTrailer(movie.id) }>
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