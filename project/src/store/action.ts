import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction('setGenre', (updateGenre: string) => ({
  payload: { updateGenre }
}));

