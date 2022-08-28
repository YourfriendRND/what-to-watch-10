import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import Catalog from '../../components/catalog/catalog';
import Spinner from '../../components/spinner/spinner';
import UserBlock from '../../components/user-block/user-block';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect } from 'react';
import { fetchPromoFilm } from '../../store/api-actions';
import { setLoadingStatus } from '../../store/action';

const MainScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);
  const filmList = useAppSelector((state) => state.filmList);
  const isFilmListLoaded = useAppSelector((state) => state.isFilmListLoaded);
  const promoFilm = useAppSelector((state) => state.promo);
  const isLoading = useAppSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(setLoadingStatus(true));
    dispatch(fetchPromoFilm());
  }, [dispatch]);

  if (!promoFilm || isLoading) {
    return <LoadingScreen />;
  }

  return (
    <section className="main">
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isLightLogo={false} />

          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">

        {isFilmListLoaded ? <Catalog films={filmList} genre={currentGenre} /> : <Spinner />}

        <footer className="page-footer">
          <Logo isLightLogo />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </section>);
};

export default MainScreen;
