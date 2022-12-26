import React, { useEffect, useState } from 'react';
import './style.css';
import playIcon from '../../assets/images/icons/play-icon.png';
import infoIcon from '../../assets/images/icons/info-icon.png';
import searchIcon from '../../assets/images/icons/search-icon.png';

const Header = ({banner, avatar}) => {
    const [blackNav, setBlackNav] = useState('transparent');

    const handleNavBackGround = () => {
        if (window.scrollY > 10) return setBlackNav('rgba(20, 20, 20)');
        return setBlackNav('transparent');
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
                <div>
                    <img src={searchIcon} alt="ícone de busca" width={35} />
                    <img src={avatar} alt="usuário" style={{marginLeft: '60px', width:'35px'}}/>
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