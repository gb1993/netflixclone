import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';

const Trailer = () => {
    const location = useLocation();
    const { state: {link} } = location;

    useEffect(() => {
        
    }, []);

    return (
        <div className="trailer-container">
            <iframe 
                type="text/html"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${link}?autoplay=1&controls=1`}
                frameborder="0"
            />
        </div>
    )
}

export default Trailer;