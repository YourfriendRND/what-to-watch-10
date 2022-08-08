import { createReducer } from '@reduxjs/toolkit';
import films from '../mock/films';
import { changeGenre, getUpdatedFilmList } from './action';
import { BASE_GENRE_FILM } from '../contants';

const initialState = {
  genre: BASE_GENRE_FILM,
  filmList: films,
  filmListByGenre: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.updateGenre;
    })
    .addCase(getUpdatedFilmList, (state) => {
      state.filmListByGenre = state.genre !== BASE_GENRE_FILM ? films.filter((film) => film.genre === state.genre) : state.filmList;
    });
});

export {reducer};
