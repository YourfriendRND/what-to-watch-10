import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import films from './mock/films';

const PromoFilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmList={films} title={PromoFilmData.TITLE} genre={PromoFilmData.GENRE} year={PromoFilmData.YEAR} />
  </React.StrictMode>,
);
