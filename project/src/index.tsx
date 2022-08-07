import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import films from './mock/films';
import { Provider } from 'react-redux';
import { store } from './store/index';

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
    <Provider store={store}>
      <App filmList={films} title={PromoFilmData.TITLE} genre={PromoFilmData.GENRE} year={PromoFilmData.YEAR} />
    </Provider>
  </React.StrictMode>,
);
