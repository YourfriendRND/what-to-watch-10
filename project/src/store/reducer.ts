import { createReducer } from '@reduxjs/toolkit';
import films from '../mock/films';
import { changeGenre, getUpdatedFilmList } from './action';


const initialState = {
  genre: 'All genres',
  filmList: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state) => {
      state.genre = '';
    })
    .addCase(getUpdatedFilmList, (state) => {
      state.filmList = films.filter((film) => film);
    });
});

export {reducer};
