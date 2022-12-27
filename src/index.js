import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Trailer from './pages/Trailer/';
import Users from './pages/Users/';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route index path='/' element={<Users />} />
      <Route exact path='/app' element={<App />} />
      <Route exact path='/trailer' element={<Trailer />} />
      <Route exact path='/search/:movieName' element={<Search />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);