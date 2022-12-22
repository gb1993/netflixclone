import React, { useEffect, useState } from 'react';
import './style.css';

const Header = ({banner}) => {
    const [blackNav, setBlackNav] = useState(false);
    const handleNavBackGround = () => {
        if (window.scrollY > 10) return setBlackNav('navStyle');
        return setBlackNav(false);
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
                    <p>{banner.overview.substr(0, 180)}...</p>
                    <button className="watchgButton">Assistir</button>
                    <button className="moreInfoButton">Mais Informações</button>
                </article>
            </div>
        </header>
    );
}

export default Header;