import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { setGenre, loadFilms, setFilmFetchAsFinished } from './action';
import { BASE_GENRE_FILM } from '../contants';

type InitialStateType = {
  genre: string,
  filmList: Film[],
  isFilmListLoaded: boolean
};


const initialState:InitialStateType = {
  genre: BASE_GENRE_FILM,
  filmList: [],
  isFilmListLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.updateGenre;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmList = action.payload;
    })
    .addCase(setFilmFetchAsFinished, (state) => {
      state.isFilmListLoaded = true;
    });
});

export {reducer};
