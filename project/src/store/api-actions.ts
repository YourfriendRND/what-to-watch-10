import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { User, Login, FilmComment, CommentTemplate } from '../types/general';
import { loadFilms, loadSpecificFilm, setAuthStatus, setFilmFetchAsFinished, loadSimilarFilms, setError, setLoadingStatus, loadCommentList } from './action';
import { AuthorizationStatus, ServerRoute } from '../contants';
import { dropToken, saveToken } from '../services/token';

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

export const logoutUser = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'logoutUser',
  async (_args, { dispatch, extra: api }) => {
    await api.delete(ServerRoute.LOGOUT_ROUTE);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  }
);

type filmId = { id: number };

export const fetchSpecificFilm = createAsyncThunk<void, filmId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadSpecificFilm',
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

export const fetchCommentList = createAsyncThunk<void, filmId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadCommentList',
  async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmComment[]>(`${ServerRoute.COMMENTS_ROUTE}/${id}`);
    dispatch(loadCommentList(data));
  }
);

export const createComment = createAsyncThunk<void, CommentTemplate, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'createComment',
  async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<FilmComment[]>(`${ServerRoute.COMMENTS_ROUTE}/${filmId}`, { comment, rating });
      dispatch(loadCommentList(data));
    } catch (err) {
      dispatch(setError('Не удалось отправить комментарий'));
    }
  }
);
