import React, { useEffect, useState } from 'react';
import { getMovieList, getBanner, getRuntime } from './helpers/tmdb';
import Header from './components/Header/';
import Poster from './components/Poster/';
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
    const bannerRuntime = await getRuntime(data.id, data.media_type);
    const bannerData = {
      backdrop_path: data.backdrop_path,
      title: data.title,
      original_name: data.original_name,
      vote_average: data.vote_average,
      release_date: data.release_date,
      overview: data.overview,
      first_air_date: data.first_air_date,
      runTime: bannerRuntime
    }
    setBanner(bannerData);
  }

  useEffect(() => {
    getAllData();
    getHeroBanner();
    
  }, []);

  return (
    <>
      {allMovies && banner ? '' : <div className="loading" />}
      {banner && <Header banner={banner} />}
      <main>
        {allMovies && allMovies.map((item, index) => (
          <div key={index}>
            <h2 style={{marginLeft: '30px'}}>{item.title}</h2>
            <div className="movie-list-container">
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
