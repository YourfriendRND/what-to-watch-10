import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction('changeGenre', (updateGenre: string) => ({
  payload: { updateGenre }
}));
