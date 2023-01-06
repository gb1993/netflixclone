import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovie } from '../../helpers/tmdb';
import './style.css';
import logo from '../../assets/images/app-logo.png';
import playIcon from '../../assets/images/icons/play-icon.png';
import infoIcon from '../../assets/images/icons/info-icon.png';
import searchIcon from '../../assets/images/icons/search-icon.png';

const Header = ({banner}) => {
    const [blackNav, setBlackNav] = useState('linear-gradient(180deg,rgba(14, 14, 14, 0.7) 10%,transparent)');
    const [searchMovieName, setSearchMovieName] = useState('');
    const navigate = useNavigate();
    
    const handleNavBackGround = () => {
        if (window.scrollY > 10) return setBlackNav('rgba(14, 14, 14)');
        return setBlackNav('linear-gradient(180deg,rgba(14, 14, 14, 0.7) 10%,transparent)');
    }

    const searchByMovieName = async (e) => {
        e.preventDefault();
        if (searchMovieName.length > 3) {
            const getSearchList = await searchMovie(searchMovieName);
            if (getSearchList.length > 0) {
                navigate(`/search/${searchMovieName}`, {state: { getSearchList }});
            } else {
                alert('Busca não encontrada, tente outro título.');
            }
            setSearchMovieName('');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavBackGround);
    }, []);

    return (
        <header>
            <nav style={{
                transition: 'all 0.5s ease-in-out',
                background: blackNav
            }}>
                <img src={logo} alt="Logo" width={120} />
                <div className="nav-icons-container">
                    <form>
                        <input type="text" name="movie-name" id="movieName" onChange={ (e) => setSearchMovieName(e.target.value) } placeholder="Buscar" autoComplete="off" />
                        <button type="submit" className="search-button" onClick={searchByMovieName}>
                            <img src={searchIcon} alt="ícone de busca" width={35} onClick={ (e) => e.target.parentNode.previousElementSibling.classList.toggle('display')} />
                        </button>
                    </form>
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
                    <span style={{color: 'rgb(189, 189, 201)'}}>{banner.runTime}</span>
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