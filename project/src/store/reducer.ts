import { createReducer } from '@reduxjs/toolkit';
import films from '../mock/films';
import { setGenre, setNumberFilmCard, resetNumberFilmCard } from './action';
import { BASE_GENRE_FILM, FILM_LIMIT_ON_MAIN_SCREEN } from '../contants';

const initialState = {
  genre: BASE_GENRE_FILM,
  filmList: films,
  numberFilmCardOnPage: FILM_LIMIT_ON_MAIN_SCREEN
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.updateGenre;
    })
    .addCase(setNumberFilmCard, (state) => {
      state.numberFilmCardOnPage = state.numberFilmCardOnPage + FILM_LIMIT_ON_MAIN_SCREEN;
    })
    .addCase(resetNumberFilmCard, (state) => {
      state.numberFilmCardOnPage = FILM_LIMIT_ON_MAIN_SCREEN;
    });
});

export {reducer};
