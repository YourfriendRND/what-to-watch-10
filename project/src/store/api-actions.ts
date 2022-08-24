import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { User, Login } from '../types/general';
import { loadFilms, loadSpecificFilm, setAuthStatus, setFilmFetchAsFinished, loadSimilarFilms, setError, setLoadingStatus } from './action';
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

type filmId = { id: number };

export const fetchSpecificFilm = createAsyncThunk<void, filmId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchSpecificFilm',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Film>(`${ServerRoute.FILM_ROUTE}/${id}`);
      dispatch(loadSpecificFilm(data));
    } catch {
      dispatch(setError('Ошибка получения данных фильма'));
    }
    dispatch(setLoadingStatus(false));
  }
);

export const fetchSimilarFilms = createAsyncThunk<void, filmId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadSimilarFilms',
  async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<Film[]>(`${ServerRoute.FILM_ROUTE}/${id}/similar`);
    dispatch(loadSimilarFilms(data));
  }
);
