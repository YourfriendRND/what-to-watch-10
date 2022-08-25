// Модуль для констант приложения

const CARD_QTY_ON_PAGE = 20;

const PREVIEW_VIDEO_PLAYER_DELAY = 1000;

enum AppPageRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  FilmReview = '/films/:id/review',
  Player = '/player/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum TabsTypes {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEW = 'Reviews'
}

const FILM_LIMIT_ON_MAIN_SCREEN = 8;

const MAX_SAME_FILM_COUNT = 4;

const MIN_FILM_RATING = 1;

const MAX_FILM_RATING = 10;

const BASE_GENRE_FILM = 'All genres';

const SERVER_URL = 'https://10.react.pages.academy/wtw';

const REQUEST_TIMEOUT = 5000;

const AUTH_TOKEN_KEY_NAME = 'what-to-whatch-token';

enum ServerRoute {
  FILM_ROUTE = '/films',
  LOGIN_ROUTE = '/login',
  LOGOUT_ROUTE = '/logout',
  COMMENTS_ROUTE = '/comments'
}

export {
  CARD_QTY_ON_PAGE,
  PREVIEW_VIDEO_PLAYER_DELAY,
  MAX_SAME_FILM_COUNT,
  AppPageRoute,
  AuthorizationStatus,
  TabsTypes,
  BASE_GENRE_FILM,
  FILM_LIMIT_ON_MAIN_SCREEN,
  SERVER_URL,
  REQUEST_TIMEOUT,
  AUTH_TOKEN_KEY_NAME,
  ServerRoute,
  MIN_FILM_RATING,
  MAX_FILM_RATING
};
