import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction('setGenre', (updateGenre: string) => ({
  payload: { updateGenre }
}));

export const setNumberFilmCard = createAction('setNumberFilmCard');

export const resetNumberFilmCard = createAction('resetNumberFilmCard');
