import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../contants';

export const setGenre = createAction('setGenre', (updateGenre: string) => ({
  payload: { updateGenre }
}));

export const loadFilms = createAction<Film[]>('loadFilms');

export const setFilmFetchAsFinished = createAction('setFilmFetchAsFinished');

export const setAuthStatus = createAction<AuthorizationStatus>('setAuthStatus');

