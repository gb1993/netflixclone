import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import goBackIcon from '../../assets/images/icons/go-back-icon.png';

const Trailer = () => {
    const location = useLocation();
    const { state } = location;

    return (
        <div className="trailer-container">
            <Link to="/app"><img src={goBackIcon} alt="go back icon" className="goBackImg" /></Link>
            <iframe
                title='youtube official trailer'
                type="text/html"
                width="100%"
                height="100%"
                src={state.link}
                frameBorder="0"
            />
        </div>
    )
}

export default Trailer;