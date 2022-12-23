import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import goBackIcon from '../../assets/images/icons/go-back-icon.png';

const Trailer = () => {
    const location = useLocation();
    console.log(location)
    const { state: {link} } = location;

    return (
        <div className="trailer-container">
            <Link to="/" ><img src={goBackIcon} alt="go back icon" className="goBackImg" /></Link>
            <iframe
                title='youtube official trailer'
                type="text/html"
                width="100%"
                height="100%"
                src={link}
                frameBorder="0"
            />
        </div>
    )
}

export default Trailer;