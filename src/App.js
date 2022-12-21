import React, { useEffect, useState } from 'react';
import { getMovieList, getBanner } from './helpers/tmdb';
import Poster from './components/Poster/';
import Header from './components/Header/';
import Footer from './components/Footer/';
import './App.css';

const App = () => {
  const [allMovies, setAllMovies] = useState();
  const [banner, setBanner] = useState();

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
      {allMovies ? '' : <div className="loading" />}
      {banner && <Header banner={banner} />}
      <main>
        {allMovies && allMovies.map((item, index) => (
          <div className="movie-list-container" key={index}>
            <h2>{item.title}</h2>
            <div className="category-container">
                <Poster item={item.items} />
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
