import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { loadFilms, setFilmFetchAsFinished } from './action';

const FILM_ROUTE = '/films';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadFilms',
  async (_arg, { dispatch, extra: api }) => {
    const {data} = await api.get<Film[]>(FILM_ROUTE);
    dispatch(loadFilms(data));
    dispatch(setFilmFetchAsFinished());
  }
);
