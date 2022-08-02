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

export {
  CARD_QTY_ON_PAGE,
  PREVIEW_VIDEO_PLAYER_DELAY,
  AppPageRoute,
  AuthorizationStatus
};
