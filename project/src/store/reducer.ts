import { createReducer } from '@reduxjs/toolkit';
import films from '../mock/films';
import { setGenre } from './action';
import { BASE_GENRE_FILM } from '../contants';

const initialState = {
  genre: BASE_GENRE_FILM,
  filmList: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.updateGenre;
    });
});

export {reducer};
