import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Trailer from './pages/Trailer/';
import Users from './pages/Users/';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/users' element={<Users />} />
      <Route exact path='/' element={<App />} />
      <Route exact path='/trailer' element={<Trailer />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);