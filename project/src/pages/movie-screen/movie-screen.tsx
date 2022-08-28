import Logo from '../../components/logo/logo';
import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import UserBlock from '../../components/user-block/user-block';
import UnexistScreen from '../unexist-screen/unexist-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import Tabs from '../../components/tabs/tabs';
import { SyntheticEvent, useState } from 'react';
import FilmCard from '../../components/film-card/film-card';
import { TabsTypes, MAX_SAME_FILM_COUNT, AuthorizationStatus } from '../../contants';
import { TabView } from '../../types/general';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchSpecificFilm, fetchSimilarFilms, fetchCommentList } from '../../store/api-actions';
import { clearCurrentFilm, setLoadingStatus } from '../../store/action';

const MovieScreen = (): JSX.Element => {
  const queryParam = useParams();
  const filmId = Number(queryParam.id);
  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const isLoadingStatus = useAppSelector((state) => state.isLoading);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const [tabView, setTabView] = useState<TabView>(TabsTypes.OVERVIEW);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTabView(TabsTypes.OVERVIEW);
    dispatch(clearCurrentFilm());
    dispatch(setLoadingStatus(true));
    dispatch(fetchSpecificFilm({ id: filmId }));
    dispatch(fetchSimilarFilms({ id: filmId }));
    dispatch(fetchCommentList({ id: filmId }));

  }, [dispatch, filmId, pathname]);

  const handlerTabClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const linkText = evt.currentTarget.textContent;
    const tabName = Object.values(TabsTypes).find((value) => linkText === value);
    if (tabName) {
      setTabView(tabName);
    }
  };

  if (isLoadingStatus) {
    return <LoadingScreen />;
  }

  if (!currentFilm) {
    return <UnexistScreen />;
  }

  return (
    <section className="movie-screen">
      <section className="film-card film-card--full" style={{ background: currentFilm.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLightLogo={false} />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link style={{ textDecoration: 'none' }} to={`/player/${queryParam.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use href="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authStatus === AuthorizationStatus.Auth ? <Link to={'review'} className="btn film-card__button">Add review</Link> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={tabView === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
                    <a href="#/" className="film-nav__link" onClick={handlerTabClick}>Overview</a>
                  </li>
                  <li className={tabView === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} >
                    <a href="#/" className="film-nav__link" onClick={handlerTabClick}>Details</a>
                  </li>
                  <li className={tabView === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
                    <a href="#/" className="film-nav__link" onClick={handlerTabClick}>Reviews</a>
                  </li>
                </ul>
              </nav>

              <Tabs targetFilm={currentFilm} tab={tabView} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarFilms?.filter((film) => film.id !== currentFilm.id).slice(0, MAX_SAME_FILM_COUNT).map((film) => <FilmCard key={film.id} film={film} isDefaultView={false} />)}
          </div>

        </section>

        <footer className="page-footer">
          <Logo isLightLogo />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default MovieScreen;
