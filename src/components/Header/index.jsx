import React, { useEffect, useState } from 'react';
import './style.css';
import playIcon from '../../assets/images/icons/play-icon.png';
import infoIcon from '../../assets/images/icons/info-icon.png';

const Header = ({banner}) => {
    const [blackNav, setBlackNav] = useState('');
    const handleNavBackGround = () => {
        if (window.scrollY > 10) return setBlackNav('navStyle');
        return setBlackNav('');
    }
    useEffect(() => {
        window.addEventListener('scroll', handleNavBackGround);
    }, []);

    return (
        <header>
            <nav className={blackNav}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Logo" width={120} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuário" width={35} />
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