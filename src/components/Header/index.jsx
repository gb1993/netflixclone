import React, { useEffect, useState } from 'react';
import { searchMovie } from '../../helpers/tmdb';
import './style.css';
import playIcon from '../../assets/images/icons/play-icon.png';
import infoIcon from '../../assets/images/icons/info-icon.png';
import searchIcon from '../../assets/images/icons/search-icon.png';
import { useNavigate } from 'react-router-dom';

const Header = ({banner}) => {
    const [blackNav, setBlackNav] = useState('transparent');
    const [searchMovieName, setSearchMovieName] = useState('');
    const navigate = useNavigate();
    
    const handleNavBackGround = () => {
        if (window.scrollY > 10) return setBlackNav('rgba(20, 20, 20)');
        return setBlackNav('transparent');
    }

    const searchByMovieName = async () => {
        setSearchMovieName('');
        const getSearchList = await searchMovie(searchMovieName);
        navigate(`/search/${searchMovieName}`, {state: { getSearchList }});
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavBackGround);
    }, []);

    return (
        <header>
            <nav style={{
                transition: 'all 0.5s ease',
                background: blackNav
            }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Logo" width={120} />
                <div className="nav-icons-container">
                    <form>
                        <input type="text" name="movie-name" id="movieName" onChange={ (e) => setSearchMovieName(e.target.value) } placeholder="Buscar" />
                    </form>
                    <img src={searchIcon} alt="ícone de busca" width={35} onClick={searchByMovieName} />
                    <img src={sessionStorage.getItem('avatar')} alt="user avatar" style={{marginLeft: '60px', width:'35px'}}/>
                </div>
            </nav>
            <div
                className="hero-banner" 
                style={
                    {backgroundImage: `url(https://image.tmdb.org/t/p/original${banner.backdrop_path})`}
                }>
                <article>
                    <h1>{banner.title || banner.original_name}</h1>
                    <span style={{color: 'green'}}>{banner.vote_average.toFixed(1)} pontos</span>
                    <span>{(banner.release_date || banner.first_air_date).substr(0, 4)}</span>
                    <p>{banner.overview.substr(0, 170)}...</p>
                    <div className="header-buttons-container">
                        <button className="watchgButton"><img src={playIcon} alt="play icon" />Assistir</button>
                        <button className="moreInfoButton"><img src={infoIcon} alt="info icon" />Mais Informações</button>
                    </div>
                </article>
            </div>
        </header>
    );
}

export default Header;