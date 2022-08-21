import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { User, Login } from '../types/general';
import { loadFilms, setAuthStatus, setFilmFetchAsFinished } from './action';
import { AuthorizationStatus, ServerRoute } from '../contants';
import { saveToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Film[]>(ServerRoute.FILM_ROUTE);
    dispatch(loadFilms(data));
    dispatch(setFilmFetchAsFinished());
  }
);

export const checkUserAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'setAuthStatus',
  async (_args, { dispatch, extra: api }) => {
    try {
      await api.get<User>(ServerRoute.LOGIN_ROUTE);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginUser = createAsyncThunk<void, Login, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loginUser',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(ServerRoute.LOGIN_ROUTE, { email, password });
    const token = data.token;
    saveToken(token);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
  }
);
