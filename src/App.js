import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieList, getBanner, searchMovie } from './helpers/tmdb';
import Header from './components/Header/';
import Poster from './components/Poster/';
import Footer from './components/Footer/';
import './App.css';

const App = () => {
  const [allMovies, setAllMovies] = useState();
  const [banner, setBanner] = useState();
  const [searchItems, setSearchItems] = useState();
  const location = useLocation();
  const {state: {avatar}} = location;

  const getAllData = async () => {
    const data = await getMovieList();
    setAllMovies(data);
  };

  const getHeroBanner = async () => {
    const data = await getBanner();
    setBanner(data);
  }

  useEffect(() => {
    getAllData();
    getHeroBanner();
    
  }, []);

  return (
    <>
      {allMovies && banner ? '' : <div className="loading" />}
      {banner && <Header banner={banner} avatar={avatar} />}
      <main>
        {allMovies && allMovies.map((item, index) => (
          <div className="movie-list-container" key={index}>
            <h2>{item.title}</h2>
                <Poster item={item.items} />
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
