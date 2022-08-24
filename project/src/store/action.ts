import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../contants';

export const setGenre = createAction('setGenre', (updateGenre: string) => ({
  payload: { updateGenre }
}));

export const loadFilms = createAction<Film[]>('loadFilms');

export const setFilmFetchAsFinished = createAction('setFilmFetchAsFinished');

export const setAuthStatus = createAction<AuthorizationStatus>('setAuthStatus');

export const loadSpecificFilm = createAction<Film>('loadSpecificFilm');

export const loadSimilarFilms = createAction<Film[]>('loadSimilarFilms');

export const setLoadingStatus = createAction<boolean>('setLoadingStatus');

export const clearCurrentFilm = createAction('clearCurrentFilm');

export const setError = createAction<string | null>('setError');

