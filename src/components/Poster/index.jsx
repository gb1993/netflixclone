import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTraillerId } from '../../helpers/tmdb';
import './style.css';
import leftArrowIcon from '../../assets/images/icons/left-arrow-icon.png';
import righttArrowIcon from '../../assets/images/icons/right-arrow-icon.png';

const Poster = ({item}) => {
  const [scrollX, setScrollX] = useState(0);
  const navigate = useNavigate();

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
      alert('Desculpe, o trailer selecionado está indisponível no momento.')
    } else {
      const youtubeLink = `https://www.youtube.com/embed/${youtubeTrailerId}`;
      navigate("/trailer", {state: {link: youtubeLink}});
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
            <div className="poster-detail">
              <h3>{movie.title || movie.original_name}</h3>
              <div>
                <span style={{color: movie.vote_average > 5 ? 'green' : 'red'}}>{movie.vote_average.toFixed(1)} pontos</span>
                <span>|</span>
                <span>{(movie.release_date || movie.first_air_date)?.substr(0, 4)}</span>
              </div>
              <p>{movie.overview?.substr(0, 50)}...</p>
            </div>
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