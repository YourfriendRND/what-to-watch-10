import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const setGenre = createAction('setGenre', (updateGenre: string) => ({
  payload: { updateGenre }
}));

export const loadFilms = createAction<Film[]>('loadFilms');

export const setFilmFetchAsFinished = createAction('setFilmFetchAsFinished');

