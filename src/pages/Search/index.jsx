import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { getTraillerId } from '../../helpers/tmdb';
import "./style.css";
import goBackIcon from '../../assets/images/icons/go-back-icon.png';

const Search = () => {
    const location = useLocation();
    const {state: {getSearchList}} = location;
    const navigate = useNavigate();

    const handleTrailer = async (id) => {
        const youtubeTrailerId = await getTraillerId(id);
        if (youtubeTrailerId === false) {
          return null;
        } else {
          const youtubeLink = `https://www.youtube.com/embed/${youtubeTrailerId}`;
          navigate("/trailer", {state: {link: youtubeLink}});
        }
      }

    return (
        <div className="search">
            <Link to="/app"><img src={goBackIcon} alt="go back icon" /></Link>
            <div className="search-container">
                {getSearchList.map((movie) => (
                    movie.poster_path ?
                        <button className="poster-container" key={movie.id} onClick={ () => handleTrailer(movie.id) }>
                            <img src={`https://tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_name} />
                        </button>
                    : ''
                ))}
            </div>
        </div>
    )
}

export default Search;