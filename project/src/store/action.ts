import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('changeGenre', (updateGenre: string) => ({
  payload: { updateGenre }
}));

export const getUpdatedFilmList = createAction('getUpdatedFilmList');
