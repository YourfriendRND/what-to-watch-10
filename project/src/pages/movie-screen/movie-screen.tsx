import Logo from '../../components/logo/logo';
import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Film } from '../../types/film';
import UnexistScreen from '../unexist-screen/unexist-screen';
import Tabs from '../../components/tabs/tabs';
import { SyntheticEvent, useState } from 'react';
import FilmCard from '../../components/film-card/film-card';
import { MAX_SAME_FILM_COUNT, TabsTypes } from '../../contants';
import { TabView } from '../../types/general';

type MovieProp = {
  filmList: Film[]
}

const MovieScreen = ({ filmList }: MovieProp): JSX.Element => {
  const queryParam = useParams();
  const [tabView, setTabView] = useState<TabView>(TabsTypes.OVERVIEW);
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTabView(TabsTypes.OVERVIEW);
  }, [pathname]);
  const handlerTabClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const linkText = evt.currentTarget.textContent;
    const tabName = Object.values(TabsTypes).find((value) => linkText === value);
    if (tabName) {
      setTabView(tabName);
    }
  };
  const targetFilm = filmList.find((film) => film.id === Number(queryParam.id));
  if (!targetFilm) {
    return <UnexistScreen />;
  }
  return (
    <section className="movie-screen">
      <section className="film-card film-card--full" style={{ background: targetFilm.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={targetFilm.backgroundImage} alt={targetFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLightLogo={false} />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href="#/">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{targetFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{targetFilm.genre}</span>
                <span className="film-card__year">{targetFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link style={{textDecoration: 'none'}} to={`/player/${queryParam.id}`}>
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
                <Link to={'review'} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={targetFilm.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
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

              <Tabs targetFilm={targetFilm} tab={tabView}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {filmList.filter((film) => film.genre === targetFilm.genre && film.id !== targetFilm.id)
              .slice(0, MAX_SAME_FILM_COUNT)
              .map((film) => <FilmCard key={film.id} film={film} isDefaultView={false}/>)}
          </div>

        </section>

        <footer className="page-footer">
          <Logo isLightLogo />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </section>);
};

export default MovieScreen;
