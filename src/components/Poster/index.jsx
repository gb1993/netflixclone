import React, { useState } from 'react';
import { getTraillerId } from '../../helpers/tmdb';
import './style.css';
import leftArrowIcon from '../../assets/images/icons/left-arrow-icon.png';
import righttArrowIcon from '../../assets/images/icons/right-arrow-icon.png';

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
      <div className="arrow-left"><img src={leftArrowIcon} alt="left arrow icon" /></div>
      <div className="arrow-right"><img src={righttArrowIcon} alt="right arrow icon" /></div>
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