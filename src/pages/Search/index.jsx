import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { getTraillerId } from '../../helpers/tmdb';
import "./style.css";
import goBackIcon from '../../assets/images/icons/go-back-icon.png';

const Search = () => {
    const location = useLocation();
    const {state: {getSearchList}} = location;
    const navigate = useNavigate();
    console.log(getSearchList)
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
            <>
                <Link to="/app"><img src={goBackIcon} alt="go back icon" /></Link>
                <div className="search-container">
                    {getSearchList && getSearchList.map((movie) => (
                        movie.poster_path ?
                            <button className="poster-container" key={movie.id} onClick={ () => handleTrailer(movie.id) }>
                                <div className="search-poster-detail">
                                    <h3>{movie.title || movie.original_name}</h3>
                                    <div>
                                        <span style={{color: movie.vote_average > 5 ? 'green' : 'red'}}>{movie.vote_average.toFixed(1)} pontos</span>
                                        <span>|</span>
                                        <span>{movie.release_date?.substr(0, 4) || 'N/A'}</span>
                                    </div>
                                    <p>{movie.overview.substr(0, 50) || 'N/A' }...</p>
                                </div>
                                <img
                                    src={`https://tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.original_name}
                                />
                            </button>
                        : ''
                    ))}
                </div>
            </>
        </div>
    )
}

export default Search;