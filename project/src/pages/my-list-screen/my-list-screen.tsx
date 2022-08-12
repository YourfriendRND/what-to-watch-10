import Logo from '../../components/logo/logo';
import { Film } from '../../types/film';
import FilmList from '../../components/film-list/film-list';

type MyListScreenProp = {
  filmList: Film[]
};

const MyListScreen = ({filmList}:MyListScreenProp):JSX.Element => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo isLightLogo={false}/>

      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmList films={filmList} maxFilmsNumber={8}/>
    </section>

    <footer className="page-footer">
      <Logo isLightLogo />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default MyListScreen;
