import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks/index';
import Catalog from '../../components/catalog/catalog';
import Spinner from '../../components/spinner/spinner';
import UserBlock from '../../components/user-block/user-block';

type PromoFilm = {
  title: string,
  genre: string,
  year: number,
}

const MainScreen = ({ title, genre, year }: PromoFilm): JSX.Element => {
  const currentGenre = useAppSelector((state) => state.genre);
  const filmList = useAppSelector((state) => state.filmList);
  const isFilmListLoaded = useAppSelector((state) => state.isFilmListLoaded);
  return (
    <section className="main">
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isLightLogo={false} />

          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
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
