import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { fetchFilmsAction, checkUserAuthStatus } from './store/api-actions';


const PromoFilmData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014
};

store.dispatch(fetchFilmsAction());
store.dispatch(checkUserAuthStatus());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title={PromoFilmData.TITLE} genre={PromoFilmData.GENRE} year={PromoFilmData.YEAR} />
    </Provider>
  </React.StrictMode>,
);
