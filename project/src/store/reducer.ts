import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { setGenre, loadFilms, setFilmFetchAsFinished, setAuthStatus, loadSpecificFilm, loadSimilarFilms, setLoadingStatus, clearCurrentFilm } from './action';
import { BASE_GENRE_FILM, AuthorizationStatus } from '../contants';

type InitialStateType = {
  genre: string,
  filmList: Film[],
  isFilmListLoaded: boolean,
  authorizationStatus: string,
  currentFilm: Film | null,
  similarFilms: Film[] | null,
  isLoading: boolean,
  error: string | null
};

const initialState:InitialStateType = {
  genre: BASE_GENRE_FILM,
  filmList: [],
  isFilmListLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentFilm: null,
  similarFilms: null,
  isLoading: false,
  error: null,

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
    })
    .addCase(loadSpecificFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(clearCurrentFilm, (state) => {
      state.currentFilm = null;
    });
});

export {reducer};
