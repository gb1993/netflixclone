import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTraillerId } from '../../helpers/tmdb';
import './style.css';
import leftArrowIcon from '../../assets/images/icons/left-arrow-icon.png';
import righttArrowIcon from '../../assets/images/icons/right-arrow-icon.png';

const Poster = ({item}) => {
  const [link, setLink] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const {state: {avatar}} = location;

  const moveLeft = () => {
    let moveLeft = scrollX + Math.round(window.innerWidth / 2);
    if (moveLeft > 0) {
      moveLeft = 0;
    }
    setScrollX(moveLeft);
  }

  const moveRight = () => {
    let moveRight = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = item.length * 150;
    if ((window.innerWidth - listWidth) > moveRight) {
      moveRight = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(moveRight);
  }

  const handleTrailer = async (id) => {
    const youtubeTrailerId = await getTraillerId(id);
    if (youtubeTrailerId === false) {
      setLink(youtubeTrailerId);
    } else {
      const youtubeLink = `https://www.youtube.com/embed/${youtubeTrailerId}`;
      navigate("/trailer", {state: {link: youtubeLink, avatar}});
    }
  }

  return (
    <>
      <div className="arrow-left" onClick={moveLeft}><img src={leftArrowIcon} alt="left arrow icon" /></div>
      <div className="arrow-right" onClick={moveRight}><img src={righttArrowIcon} alt="right arrow icon" /></div>
      <div className="movie-list" style={{
        marginLeft: scrollX,
        width: item.length * 150,
        display: 'flex',
        transition: 'all ease 0.4s'
      }}>
        {item.map((movie) => (
          <button className="poster-container" key={movie.id} onClick={ () => handleTrailer(movie.id) }>
            <img
              src={`https://tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.original_name}
            />
          </button>
        ))}
      </div>
    </>
  );
}

export default Poster;