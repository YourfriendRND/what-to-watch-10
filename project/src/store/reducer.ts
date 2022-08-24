import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { setGenre, loadFilms, setFilmFetchAsFinished, setAuthStatus } from './action';
import { BASE_GENRE_FILM, AuthorizationStatus } from '../contants';

type InitialStateType = {
  genre: string,
  filmList: Film[],
  isFilmListLoaded: boolean,
  authorizationStatus: string
};

const initialState:InitialStateType = {
  genre: BASE_GENRE_FILM,
  filmList: [],
  isFilmListLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
