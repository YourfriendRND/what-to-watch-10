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

const FILM_LIMIT_ON_MAIN_SCREEN = 2;

const MAX_SAME_FILM_COUNT = 4;

const BASE_GENRE_FILM = 'All genres';

export {
  CARD_QTY_ON_PAGE,
  PREVIEW_VIDEO_PLAYER_DELAY,
  MAX_SAME_FILM_COUNT,
  AppPageRoute,
  AuthorizationStatus,
  TabsTypes,
  BASE_GENRE_FILM,
  FILM_LIMIT_ON_MAIN_SCREEN
};
